// 'use strict';
// const pageHeader = document.querySelector('.header');
// const headerToggle = document.querySelector('.header__toggle-menu');
// const pageBody = document.querySelector('body');
// const linkItemMenu = pageHeader.querySelectorAll('a');


// if (pageHeader) {
//   pageHeader.classList.remove('header--no-js');
// }


// headerToggle.addEventListener('click', () => {
//   if (pageHeader.classList.contains('header--open-menu')) {
//     pageHeader.classList.remove('header--open-menu');
//     pageBody.style.overflowY = 'scroll';
//   } else {
//     pageHeader.classList.add('header--open-menu');
//     pageBody.style.overflowY = 'hidden';
//   }
// });


// linkItemMenu.forEach((item) => {
//   item.addEventListener('click',() => {
//     pageBody.style.overflowY = 'scroll';
//     pageHeader.classList.remove('header--open-menu');
//   });
// });
const cropText = function() {
  const cropElement = document.querySelectorAll('.about__text-crop');
  const size = 200;
  const endCharacter = '..';

  cropElement.forEach((el) => {
    let text = el.innerHTML;

    if (el.innerHTML.length > size) {
      text = text.substr(0, size);
      el.innerHTML = text + endCharacter;
    }
  });
};

// cropText();
