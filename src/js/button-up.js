let scrollPos = 0;
const buttonUpEl = document.querySelector('.button-up');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    buttonUpEl.classList.add('is-hidden');
  } else {
    buttonUpEl.classList.remove('is-hidden');
  }
  scrollPos = windowY;
}

window.addEventListener('scroll', checkPosition);
