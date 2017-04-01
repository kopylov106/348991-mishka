var navMain = document.querySelector('.main-nav');
var navbutton = document.querySelector('.main-nav__button');

    navMain.classList.remove('main-nav--nojs');

    navbutton.addEventListener('click', function() {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    });
