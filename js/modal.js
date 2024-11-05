document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.querySelector('.modal-overlay');
    const contactModal = document.querySelector('.contact-modal');
    const closeModal = document.querySelector('.contact-modal__close');
    const openModalButton = document.querySelector('.section--first__button--order');

    function openModal() {
        modalOverlay.classList.remove('modal-overlay--hidden');
        contactModal.classList.remove('contact-modal--hidden');
    }

    function closeModalFunc() {
        modalOverlay.classList.add('modal-overlay--hidden');
        contactModal.classList.add('contact-modal--hidden');
    }

    openModalButton.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalFunc);
    modalOverlay.addEventListener('click', closeModalFunc);
});
