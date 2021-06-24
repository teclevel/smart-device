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


const toggleMenu = (menu, button) => {
  menu.classList.toggle ('js__list-menu-closed');
  button.classList.toggle ('button-menu--closed');
};

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
