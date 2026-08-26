// =====================================================
// MENÚ HAMBURGUESA PARA MÓVIL
// =====================================================
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Alternar menú al hacer clic en el botón
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            nav.classList.remove('show');
        });
    });

    // Resaltar enlace activo al hacer scroll
    const sections = document.querySelectorAll('.section, .hero');
    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});