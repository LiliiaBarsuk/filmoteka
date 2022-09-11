(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-developers-open]'),
    closeModalBtn: document.querySelector('[modal-developers-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', onBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden__developers');
  }
  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  }
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  });
})();
