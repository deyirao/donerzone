document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navItems = document.querySelectorAll(".nav-menu li");

    function toggleMenu() {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    }

    hamburger.addEventListener('click', function() {
        toggleMenu()

        navItems.forEach((item, index) => {
            item.style.setProperty('--i', index);

            item.addEventListener('click', function() {
                if (navLinks.classList.contains('active')) {
                    toggleMenu()
                }
            });
        });
    });
});