/* Обрезка текста*/

(function () {
  const textAbout = document.querySelector('.about__text-crop');
  const content = textAbout.textContent;
  const buttonCropText = document.querySelector('.about__button');

  function cropText() {
    const cropElements = document.querySelectorAll('.about__text-crop');
    const size = 224;
    const endCharacter = '..';

    cropElements.forEach((el) => {
      let text = el.innerHTML;
      if (el.innerHTML.length > size) {
        text = text.substring(0, size);
        el.innerHTML = text + endCharacter;
      }
    });
  }

  cropText();

  buttonCropText.addEventListener('click', () => {
    if (buttonCropText.classList.contains('text-cropped')) {
      buttonCropText.classList.remove('text-cropped');
      textAbout.textContent = content;
    } else {
      cropText();
      buttonCropText.classList.add('text-cropped');
    }
  });
})();


/*аккордеон*/

(function () {
  const accordion = document.querySelector('.accordion');
  const togglerClass = 'accordion__toggler';
  const itemClass = 'accordion__item';
  const itemOpenedClass = 'accordion__item--opened';

  function closeAccordionItems() {
    accordion
      .querySelectorAll(`.${itemClass}`)
      .forEach((element) => {
        if (element) {
          element.classList.remove(itemOpenedClass);
        }
      });
  }

  closeAccordionItems();

  accordion.addEventListener('click', (event) => {
    const toggler = event.target.closest(`.${togglerClass}`);

    if (!toggler) { return; }

    const item = toggler.closest(`.${itemClass}`);
    const isOpened = item.classList.contains(itemOpenedClass);

    closeAccordionItems();

    isOpened
      ? item.classList.remove(itemOpenedClass)
      : item.classList.add(itemOpenedClass);
  });
})();


/* Отправка формы */

(function () {
  const form = document.querySelectorAll('form');

  form.forEach((element) => {
    element.addEventListener('submit', (e) => {
      e.preventDefault();
      const checkBox = element.querySelector('[type="checkbox"]');

      if (checkBox.checked) {
        element.submit();
      }
    });
  });
})();


/* Попап */

(function () {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.zIndex = '0';
  overlay.style.backgroundColor = 'black';
  overlay.style.opacity = '.5';

  function showOverlay() {
    document.body.append(overlay);
  }

  function closeOverlay() {
    overlay.remove();
  }

  const popup = document.querySelector('.modal');
  const elementsPopup = Array.from(popup.querySelectorAll('input, button'));

  const buttonClose = popup.querySelector('.modal__button-close');
  const buttonOpenPopup = document.querySelector('.header__button-order');

  const html = document.querySelector('html');
  const marginSize = window.innerWidth - html.clientWidth;

  buttonOpenPopup.addEventListener('click', onModalOpen);
  buttonClose.addEventListener('click', onModalClose);
  buttonClose.addEventListener('keydown', onModalButtonClose);


  function onModalOpen(evt) {
    evt.preventDefault();

    if (popup) {
      popup.classList.remove('visually-hidden');
    }

    document.querySelector('body').style.overflow = 'hidden';
    showOverlay();

    if (overlay) {
      overlay.addEventListener('click', onModalClose);
    }

    document.addEventListener('keydown', onModalKeydown);

    if (marginSize) {
      html.style.marginRight = `${marginSize}px`;
    }
    elementsPopup[0].focus();
  }

  function onModalButtonClose(evt) {
    if (evt.code === 'Enter' || evt.code === 'Space') {
      onModalClose();
    }
  }

  function onModalClose() {
    if (popup) {
      popup.classList.add('visually-hidden');
    }

    document.querySelector('body').style.overflow = '';
    closeOverlay();
    document.removeEventListener('keydown', onModalKeydown);
    html.style.marginRight = '';
  }

  function onModalKeydown(evt) {
    const focusedItemIndex = elementsPopup.indexOf(document.activeElement);

    if (evt.shiftKey && (focusedItemIndex === 0 || focusedItemIndex === -1)) {
      elementsPopup[elementsPopup.length - 1].focus();
      evt.preventDefault();
    }

    if (!evt.shiftKey && focusedItemIndex === elementsPopup.length - 1) {
      elementsPopup[0].focus();
      evt.preventDefault();
    }

    if (evt.code === 'Escape' || evt.code === 'Esc') {
      onModalClose();
    }
  }
})();


// /* поле ввода номера телефона Маска +7( */ .// не удаляет половину маски


(function () {
  const inputTel = document.querySelectorAll('[type="tel"]');
  inputTel.forEach((element) => {

    element.addEventListener('focus', () => {
      const prefixTel = '+7(';
      if (!/^\+\d*$/.test(element.value)) {
        element.value = prefixTel;
      }
    });

    // element.addEventListener('blur', () => {
    //   // console.log(element.placeholder);
    //   if (element.value === element.minLength) {
    //     element.value = element.placeholder;
    //   }
    // });

    element.addEventListener('keypress', (event) => {

      if (!/\d/.test(event.key)) {
        event.preventDefault();
      }
    });

    element.addEventListener('input', () => {

      if (element.value.length === 6) {
        element.value = `${element.value})`;
      }
    });
  });
})();


/* поле ввода номера телефона Маска +7(___)______*/   //не соответствует

// (function () {
//   window.addEventListener ('DOMContentLoaded', () => {
//     function setCursorPosition(pos, elem) {
//       elem.focus();
//       if (elem.setSelectionRange) { elem.setSelectionRange(pos, pos); }
//       else if (elem.createTextRange) {
//         const range = elem.createTextRange();
//         range.collapse(true);
//         range.moveEnd('character', pos);
//         range.moveStart('character', pos);
//         range.select();
//       }
//     }

//     function mask(event) {
//       const matrix = '+7(___)_______';
//       let i = 0;
//       const def = matrix.replace(/\D/g, '');
//       let val = this.value.replace(/\D/g, '');

//       if (def.length >= val.length) { val = def; }

//       this.value = matrix.replace(/./g, function (a) {
//             return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
//           });
//       if (event.type === 'blur') {
//         if (this.value.length === 2) { this.value = ''; }
//       } else { setCursorPosition(this.value.length, this); }
//     }

//     const input = document.querySelector('[type="tel"]');

//     input.addEventListener('input', mask, false);
//     input.addEventListener('focus', mask, false);
//     input.addEventListener('blur', mask, false);
//   });

// })();


// /* Тест ввод номера тел */
// const input = document.querySelector('[type="tel"]');

// input.addEventListener('keypress', (evt) => {
//   if (evt.keyCode < 47 || evt.keyCode > 57) {
//     evt.preventDefault();
//   }
// });

// input.addEventListener('focus', () => {
//   if (input.value.length === 0) {
//     input.value = '+7(';
//     console.log(input.selectionStart);
//     input.selectionStart = input.value.length;
//   }
// });

// input.addEventListener('input', (evt) => {
//   if (input.selectionStart < 3) {
//     input.selectionStart = input.value.length;
//   }

//   if (input.selectionStart === 6) {
//     input.value = `${input.value})`;
//   }

//   if (evt.key === 'Backspace' && input.value.length <= 2) {
//     evt.preventDefault();
//   }
// });

// input.addEventListener('blur', () => {
//   if (input.value === '+7(') {
//     input.value = '';
//   }
// });

// input.addEventListener('keydown', (evt) => {
//   if (evt.key === 'Backspace' && input.value.length <= 3) {
//     evt.preventDefault();
//   }
// });
