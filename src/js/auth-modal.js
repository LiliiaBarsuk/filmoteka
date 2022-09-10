const authLink = document.querySelector('.authorization');
const authModal = document.querySelector('.auth-modal');
const closeBtn = document.querySelector('.modal__button');
const body = document.querySelector('body');

authLink.addEventListener('click', onClickAuthLink);
closeBtn.addEventListener('click', onClickCloseBtn);
document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    onClickCloseBtn();
  }
});

function onClickAuthLink(e) {
  e.preventDefault();
  authModal.classList.add('open');
  body.classList.add('overflow-hidden');
}

function onClickCloseBtn(e) {
  authModal.classList.remove('open');
  body.classList.remove('overflow-hidden');
}
