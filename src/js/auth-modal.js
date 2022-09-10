const authLink = document.querySelector('.authorization');
const authModal = document.querySelector('.auth-modal');
const closeBtn = document.querySelector('#auth-modal-btn');
const registrLink = document.querySelector('.registration');
const registrModal = document.querySelector('#registr-modal');
const registrCloseBtn = document.querySelector('#registr-modal-btn');
const body = document.querySelector('body');

authLink.addEventListener('click', onClickAuthLink);
closeBtn.addEventListener('click', onClickCloseBtn);
registrLink.addEventListener('click', onClickRegistrLink);
registrCloseBtn.addEventListener('click', onRegistrCloseBtn);

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

function onClickCloseBtn() {
  authModal.classList.remove('open');
  body.classList.remove('overflow-hidden');
}

function onClickRegistrLink(e) {
  e.preventDefault();
  authModal.classList.remove('open');
  registrModal.classList.add('open');
}

function onRegistrCloseBtn() {
  registrModal.classList.remove('open');
  body.classList.remove('overflow-hidden');
}
