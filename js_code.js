
document.addEventListener("DOMContentLoaded", function() {
    const sectionBox = document.querySelector('.section-box');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 0.3 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function showSectionBox() {
        if (isInViewport(sectionBox)) {
            sectionBox.style.opacity = "1";
            sectionBox.style.transform = "translateY(0)";
            window.removeEventListener('scroll', showSectionBox);
        }
    }

    window.addEventListener('scroll', showSectionBox);
    showSectionBox(); // Check on initial load
});
