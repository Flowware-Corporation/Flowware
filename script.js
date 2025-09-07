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

// Manejar envío del formulario
function manejarEnvio(evento) {
    evento.preventDefault();
    
    // Obtener datos del formulario
    const datosFormulario = new FormData(evento.target);
    const nombre = datosFormulario.get('nombre');
    const email = datosFormulario.get('email');
    const telefono = datosFormulario.get('telefono');
    const servicio = datosFormulario.get('servicio');
    const mensaje = datosFormulario.get('mensaje');
    
    // Validación simple
    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    // Simular envío del formulario
    alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto a ${email}.`);
    
    // Reiniciar formulario
    evento.target.reset();
}

// Animar tarjetas al hacer scroll
const opcionesObservador = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observador = new IntersectionObserver(function(entradas) {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = '1';
            entrada.target.style.transform = 'translateY(0)';
        }
    });
}, opcionesObservador);

// Observar todas las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const tarjetas = document.querySelectorAll('.about-card, .service-card, .portfolio-item');
    tarjetas.forEach(tarjeta => {
        tarjeta.style.opacity = '0';
        tarjeta.style.transform = 'translateY(30px)';
        tarjeta.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observador.observe(tarjeta);
    });
});


