/*Remove preload class from body after page load*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('body').removeClass('preload');
})