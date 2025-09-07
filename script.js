// Alternar menú móvil
function alternarMenu() {
    const enlacesNavegacion = document.getElementById('navLinks');
    enlacesNavegacion.classList.toggle('active');
}

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(ancla => {
    ancla.addEventListener('click', function (e) {
        e.preventDefault();
        const objetivo = document.querySelector(this.getAttribute('href'));
        if (objetivo) {
            objetivo.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Agregar efecto de desplazamiento al encabezado
window.addEventListener('scroll', function() {
    const encabezado = document.querySelector('header');
    if (window.scrollY > 100) {
        encabezado.classList.add('scrolled');
    } else {
        encabezado.classList.remove('scrolled');
    }
});


