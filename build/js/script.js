/* Обрезка текста*/

const textAbout = document.querySelector('.about__text-crop');
const content = textAbout.textContent;
const buttonCropText = document.querySelector('.about__button');

const cropText = function() {
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
};

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


const footerMenu = document.querySelector('.s');


// // 'use strict';
// // const pageHeader = document.querySelector('.header');
// // const headerToggle = document.querySelector('.header__toggle-menu');
// // const pageBody = document.querySelector('body');
// // const linkItemMenu = pageHeader.querySelectorAll('a');


// // if (pageHeader) {
// //   pageHeader.classList.remove('header--no-js');
// // }


// // headerToggle.addEventListener('click', () => {
// //   if (pageHeader.classList.contains('header--open-menu')) {
// //     pageHeader.classList.remove('header--open-menu');
// //     pageBody.style.overflowY = 'scroll';
// //   } else {
// //     pageHeader.classList.add('header--open-menu');
// //     pageBody.style.overflowY = 'hidden';
// //   }
// // });


// // linkItemMenu.forEach((item) => {
// //   item.addEventListener('click',() => {
// //     pageBody.style.overflowY = 'scroll';
// //     pageHeader.classList.remove('header--open-menu');
// //   });
// // });
