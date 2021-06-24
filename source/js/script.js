/* Обрезка текста*/

const textAbout = document.querySelector('.about__text-crop');
const content = textAbout.textContent;
const buttonCropText = document.querySelector('.about__button');

function cropText () {
  const cropElements = document.querySelectorAll('.about__text-crop');
  const size = 200;
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


/*Меню футера*/

const footerMenu = document.querySelector('.footer__nav');
const listMenu = footerMenu.querySelector ('.footer__list-menu');
const buttonMenu = footerMenu.querySelector('.footer__menu-button');
const listContacts = footerMenu.querySelector ('.footer__list-contacts');
const buttonContacts = footerMenu.querySelector('.footer__contacts-button');

const closedMenu = listMenu.classList.contains('js__list-menu-closed');
const closedContacts = listContacts.classList.contains('js__list-menu-closed');


if (footerMenu) {
  footerMenu.classList.add('js');
}


function toggleMenu (menu, button) {
  menu.classList.toggle ('js__list-menu-closed');
  button.classList.toggle ('button-menu--closed');
}

if (!closedMenu) {
  toggleMenu(listMenu, buttonMenu);
}

buttonMenu.addEventListener('click', () => {
  if (!closedContacts){
    toggleMenu(listMenu, buttonMenu);
    toggleMenu(listContacts, buttonContacts);
  }
});

buttonContacts.addEventListener('click', () => {
  if (!closedMenu){
    toggleMenu(listContacts, buttonContacts);
    toggleMenu(listMenu, buttonMenu);
  }
});


/*Оверлей*/

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

function showOverlay () {
  document.body.append(overlay);
}

function closeOverlay () {
  overlay.remove();
}


/* Попап */

const popup = document.querySelector('.modal');
const elementsPopup = Array.from(popup.querySelectorAll('input, button'));

const buttonClose = popup.querySelector('.modal__button');
const buttonOpenPopup = document.querySelector('.header__button-order');
const buttonSubmit = popup.querySelector('button[type="submit"]');
const form = popup.querySelector('.modal__form');
const checkBox = popup.querySelector('#modal-check');
const html = document.querySelector('html');
const marginSize = window.innerWidth - html.clientWidth;

buttonOpenPopup.addEventListener('click', onModalOpen);
buttonClose.addEventListener('click', onModalClose);
buttonClose.addEventListener('keydown', onModalButtonClose);
buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  // if (checkBox.checked && ) {
  //   form.submit();
  // }

});

function onModalOpen (evt) {
  evt.preventDefault();
  popup.classList.remove('visually-hidden');
  document.querySelector('body').style.overflow = 'hidden';
  showOverlay();
  overlay.addEventListener('click', onModalClose); //
  document.addEventListener('keydown', onModalKeydown);//

  if (marginSize) {
    html.style.marginRight = `${marginSize}px`;
  }
  elementsPopup[0].focus();
}

function onModalButtonClose (evt) {
  if (evt.code === 'Enter'|| evt.code === 'Space') {
    onModalClose();
  }
}

function onModalClose () {
  popup.classList.add('visually-hidden');
  document.querySelector('body').style.overflow = '';
  closeOverlay();
  document.removeEventListener('keydown', onModalKeydown);
  html.style.marginRight = '';
}

function onModalKeydown (evt) {
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


// /* Обрезка текста*/

// const textAbout = document.querySelector('.about__text-crop');
// const content = textAbout.textContent;
// const buttonCropText = document.querySelector('.about__button');

// const cropText = function() {
//   const cropElements = document.querySelectorAll('.about__text-crop');
//   const size = 200;
//   const endCharacter = '..';

//   cropElements.forEach((el) => {
//     let text = el.innerHTML;
//     if (el.innerHTML.length > size) {
//       text = text.substring(0, size);
//       el.innerHTML = text + endCharacter;
//     }
//   });
// };

// cropText();

// buttonCropText.addEventListener('click', () => {
//   if (buttonCropText.classList.contains('text-cropped')) {
//     buttonCropText.classList.remove('text-cropped');
//     textAbout.textContent = content;
//   } else {
//     cropText();
//     buttonCropText.classList.add('text-cropped');
//   }
// });


// /*Меню футера*/

// const footerMenu = document.querySelector('.footer__nav');
// const listMenu = footerMenu.querySelector ('.footer__list-menu');
// const buttonMenu = footerMenu.querySelector('.footer__menu-button');
// const listContacts = footerMenu.querySelector ('.footer__list-contacts');
// const buttonContacts = footerMenu.querySelector('.footer__contacts-button');

// const closedMenu = listMenu.classList.contains('js__list-menu-closed');
// const closedContacts = listContacts.classList.contains('js__list-menu-closed');


// if (footerMenu) {
//   footerMenu.classList.add('js');
// }


// const toggleMenu = (menu, button) => {
//   menu.classList.toggle ('js__list-menu-closed');
//   button.classList.toggle ('button-menu--closed');
// };

// if (!closedMenu) {
//   toggleMenu(listMenu, buttonMenu);
// }

// buttonMenu.addEventListener('click', () => {
//   if (!closedContacts){
//     toggleMenu(listMenu, buttonMenu);
//     toggleMenu(listContacts, buttonContacts);
//   }
// });

// buttonContacts.addEventListener('click', () => {
//   if (!closedMenu){
//     toggleMenu(listContacts, buttonContacts);
//     toggleMenu(listMenu, buttonMenu);
//   }
// });



// /*Оверлей*/

// const overlay = document.createElement('div');
// overlay.classList.add('overlay');
// overlay.style.position = 'fixed';
// overlay.style.top = '0';
// overlay.style.left = '0';
// overlay.style.width = '100%';
// overlay.style.height = '100%';
// overlay.style.zIndex = '0';
// overlay.style.backgroundColor = 'black';
// overlay.style.opacity = '.5';

// const showOverlay = () => {
//   document.body.append(overlay);
// };

// const closeOverlay = () => {
//   overlay.remove();
// };


// /* Попап */

// const popup = document.querySelector('.modal');
// const elementsPopup = Array.from(popup.querySelectorAll('input, button, a'));

// const buttonClose = popup.querySelector('.modal_button');
// const buttonOpenPopup = document.querySelector('.lead__button-consultation');
// const html = document.querySelector('html');
// const marginSize = window.innerWidth - html.clientWidth;

// const onModalKeydown = (evt) => {
//   const focusedItemIndex = elementsPopup.indexOf(document.activeElement)

//   if (evt.shiftKey && (focusedItemIndex === 0 || focusedItemIndex === -1)) {
//     elementsPopup[elementsPopup.length - 1].focus();
//     evt.preventDefault();
//   }

//   if (!evt.shiftKey && focusedItemIndex === elementsPopup.length - 1) {
//     elementsPopup[0].focus();
//     evt.preventDefault();
//   }

//   if (evt.code === 'Escape' || evt.code === 'Esc') {
//     onModalClose();
//   }
// };

// function onModalClose () {
//   popup.classList.add('visually-hidden');
//   document.querySelector('body').style.overflow = '';
//   closeOverlay();
//   document.removeEventListener('keydown', onModalKeydown);
//   html.style.marginRight = '';
// }


// function onModalOpen (evt) {
//   evt.preventDefault();
//   popup.classList.remove('visually-hidden');
//   document.querySelector('body').style.overflow = 'hidden';
//   showOverlay();
//   overlay.addEventListener('click', onModalClose); //
//   document.addEventListener('keydown', onModalKeydown);//

//   if (marginSize) {
//     html.style.marginRight = marginSize + 'px';
//   }
//   elementsPopup[0].focus();
// }


// const onModalButtonClose = (evt) => {
//   if (evt.code === 'Enter'|| evt.code === 'Space') {
//     onModalClose();
//   }
// };
// buttonOpenPopup.addEventListener('click', onModalOpen);
// buttonClose.addEventListener('click', onModalClose);
// buttonClose.addEventListener('keydown', onModalButtonClose);





// const buttonsBuy = document.querySelectorAll('.button-buy');
// const popupBuy = document.querySelector('.modal-buy');
// const elementsPopupBuy = Array.from(popupBuy.querySelectorAll('input, button'));
// const buttonClosePopupBuy = popupBuy.querySelector('.modal-buy__button-close');
// const html = document.querySelector('html');


// for (const button of buttonsBuy) {
//   button.addEventListener('click', onModalOpen)
// };

// buttonClosePopupBuy.addEventListener('click', onModalClose);
// buttonClosePopupBuy.addEventListener('keydown', onModalButtonClose);


// function onModalKeydown(evt) {
//   const focusedItemIndex = elementsPopupBuy.indexOf(document.activeElement)

//   if (evt.shiftKey && (focusedItemIndex === 0 || focusedItemIndex === -1)) {
//     elementsPopupBuy[elementsPopupBuy.length - 1].focus();
//     evt.preventDefault();
//   }

//   if (!evt.shiftKey && focusedItemIndex === elementsPopupBuy.length - 1) {
//     elementsPopupBuy[0].focus();
//     evt.preventDefault();
//   }

//   if (evt.code == 'Escape' || evt.code == 'Esc') {
//     onModalClose();
//   }
// };


// function onModalButtonClose(evt) {
//   if (evt.code == 'Enter'|| evt.code == 'Space') {
//     onModalClose();
//   }
// }


// function onModalOpen() {
//   popupBuy.classList.remove('visually-hidden');
//   document.querySelector('body').style.overflow = 'hidden';
//   showOverlay();
//   overlay.addEventListener('click', onModalClose);
//   document.addEventListener('keydown', onModalKeydown);

//   if (marginSize) {
//     html.style.marginRight = marginSize + 'px';
//   }

//   elementsPopupBuy[0].focus();
// };


// function onModalClose() {
//   popupBuy.classList.add('visually-hidden');
//   document.querySelector('body').style.overflow = '';
//   closeOverlay();
//   document.removeEventListener('keydown', onModalKeydown);
//   html.style.marginRight = '';
// };
