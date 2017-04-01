var cartButton = document.querySelectorAll('.catalog-item__button');
var overlay = document.querySelector('.modal-overlay');
var modal = document.querySelector('.modal');

for (var i = 0; i < cartButton.length; i++) {
  cartButton[i].addEventListener('click', function() {
  if (modal.classList.contains('modal--hidden')) {
    modal.classList.remove('modal--hidden');
    modal.classList.add('modal--visible');
    overlay.classList.remove('modal-overlay--hidden');
    overlay.classList.add('modal-overlay--visible');
    }
  })
};

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains('modal--visible')) {
    modal.classList.remove('modal--visible');
    modal.classList.add('modal--hidden');
    overlay.classList.remove('modal-overlay--visible');
    overlay.classList.add('modal-overlay--hidden');
    }
  }
});

overlay.addEventListener('click', function(event) {
  if (overlay.classList.contains('modal-overlay--visible')) {
    modal.classList.remove('modal--visible');
    modal.classList.add('modal--hidden');
    overlay.classList.remove('modal-overlay--visible');
    overlay.classList.add('modal-overlay--hidden');
  }
});
