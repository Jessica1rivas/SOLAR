/* =====================================================
   MENÚ RESPONSIVE
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("show");
});

/* =====================================================
   CERRAR MENÚ AL HACER CLIC EN UN ENLACE
===================================================== */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("show");
    });
});

/* =====================================================
   DETECTAR SECCIÓN ACTIVA EN EL MENÚ
===================================================== */

window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section[id]");
    let current = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* =====================================================
   HEADER SCROLL SHADOW
===================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* =====================================================
   SCROLL REVEAL - ANIMACIONES SIEMPRE ACTIVAS
   (Funciona tanto hacia arriba como hacia abajo)
===================================================== */

// Seleccionar todos los elementos con clases de revelado
const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
);

// Función para verificar si un elemento es visible en pantalla
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // El elemento es visible cuando está al menos 100px dentro de la ventana
    return rect.top <= windowHeight - 100 && rect.bottom >= 100;
}

// Función para activar las animaciones (siempre verifica todos los elementos)
function activateReveal() {
    revealElements.forEach(function (el) {
        if (isElementInViewport(el)) {
            el.classList.add("active");
        } else {
            // QUITAMOS la clase 'active' cuando el elemento NO está visible
            // Esto permite que la animación se repita al volver a entrar
            el.classList.remove("active");
        }
    });
}

// Ejecutar al cargar la página
setTimeout(activateReveal, 300);

// Ejecutar al hacer scroll (optimizado con requestAnimationFrame)
let revealTimeout = false;
window.addEventListener("scroll", function () {
    if (!revealTimeout) {
        window.requestAnimationFrame(function () {
            activateReveal();
            revealTimeout = false;
        });
        revealTimeout = true;
    }
});

// También ejecutar al redimensionar la ventana (por si cambia el viewport)
window.addEventListener("resize", function () {
    activateReveal();
});

/* =====================================================
   ANIMACIÓN DE CARGA PARA EL PROTOTIPO
===================================================== */

const chargeScreen = document.querySelector(".charge-screen strong");

if (chargeScreen) {
    setInterval(function () {
        chargeScreen.style.transform = "scale(1.15)";
        setTimeout(function () {
            chargeScreen.style.transform = "scale(1)";
        }, 300);
    }, 2000);
}

/* =====================================================
   INTERACCIÓN EN LAS TABLAS - CLIC EN FILAS
===================================================== */

const tableRows = document.querySelectorAll("tbody tr");

tableRows.forEach(function (row) {
    row.addEventListener("click", function () {
        this.style.backgroundColor = "#fef3c7";
        setTimeout(function () {
            row.style.backgroundColor = "";
        }, 500);
    });
});

/* =====================================================
   EFECTO DE PARALLAX EN EL HERO
===================================================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", function () {
    if (hero) {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            hero.style.backgroundPositionY = scrollY * 0.3 + "px";
        }
    }
});

/* =====================================================
   NAVEGACIÓN SUAVE PARA ENLACES CON #
   (Deslizamiento suave hacia la sección)
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();

            const headerHeight = document.querySelector(".header").offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    });
});

/* =====================================================
   EFECTO DE APARICIÓN PARA EL HERO (FADE IN)
===================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(30px)";
        setTimeout(function () {
            heroContent.style.transition = "opacity 1s ease, transform 1s ease";
            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";
        }, 200);
    }
});

console.log("✅ SOLAR SENATI - Design Thinking cargado correctamente");
