document.addEventListener('DOMContentLoaded', () => {
    const openMobile = document.querySelector('.header__menu-btn');
    const closeMobile = document.querySelector('.mobile-header__close');
    const modalOverlay = document.querySelector('.mobile-header');

    function openMobileHeader() {
        modalOverlay.classList.remove('mobile-header--hidden');
        document.documentElement.style.overflow = 'hidden';
    }

    function closeMobileFunc() {
        modalOverlay.classList.add('mobile-header--hidden');
        document.documentElement.style.overflow = '';
    }

    openMobile.addEventListener('click', openMobileHeader);
    closeMobile.addEventListener('click', closeMobileFunc);
});
