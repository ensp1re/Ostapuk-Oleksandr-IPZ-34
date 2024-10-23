document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.querySelector('.modal-overlay');
    const contactModal = document.querySelector('.contact-modal');
    const closeModal = document.querySelector('.close');
    const openModalButton = document.querySelector('.order-btn');

    function openModal() {
        modalOverlay.classList.remove('is-hidden');
        contactModal.classList.remove('is-hidden');
    }

    function closeModalFunc() {
        modalOverlay.classList.add('is-hidden');
        contactModal.classList.add('is-hidden');
    }

    openModalButton.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalFunc);
    modalOverlay.addEventListener('click', closeModalFunc);
});
