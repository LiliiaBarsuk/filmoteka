(() => {
  const refs = {
    openModalBtnDevelopers: document.querySelector('[modal-developers-open]'),
    closeModalBtnDevelopers: document.querySelector('[modal-developers-close]'),
    modalDeveloper: document.querySelector('[data-modal-developer]'),
  };

  refs.openModalBtnDevelopers.addEventListener('click', openModalDeveloper);
  refs.closeModalBtnDevelopers.addEventListener('click', closeModalDeveloper);
  refs.modalDeveloper.addEventListener('click', onBackdropClickDeveloper);

  function openModalDeveloper() {
    refs.modalDeveloper.classList.remove('is-hidden__developers');
  }
  function closeModalDeveloper() {
    refs.modalDeveloper.classList.add('is-hidden__developers');
  }
  function onBackdropClickDeveloper(event) {
    if (event.currentTarget === event.target) {
      closeModalDeveloper();
    }
  }
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closeModalDeveloper();
    }
  });
})();
