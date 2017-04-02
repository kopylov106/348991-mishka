var bestsellerButton = document.querySelector('.bestseller__pseudo-button');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');

bestsellerButton.addEventListener('click', function() {
  if (modal.classList.contains('modal--hidden')) {
    modal.classList.remove('modal--hidden');
    overlay.classList.remove('modal-overlay--hidden');
    modal.classList.add('modal--visible');
    overlay.classList.add('modal-overlay--visible');
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    console.log(event.keyCode);
    if (modal.classList.contains('modal--visible')) {
      console.log('true');
      modal.classList.remove('modal--visible');
      modal.classList.add('modal--hidden');
      overlay.classList.remove('modal-overlay--visible');
      overlay.classList.add('modal-overlay--hidden');
    }
    else {
      console.log('false');
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
