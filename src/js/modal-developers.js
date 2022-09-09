(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal-developers-open]'),
    closeModalBtn: document.querySelector('[modal-developers-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
