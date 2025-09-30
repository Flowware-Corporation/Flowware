function alternarMenu() {
    const enlacesNavegacion = document.getElementById('enlacesNavegacion');
    enlacesNavegacion.classList.toggle('active');
}

document.querySelectorAll('.enlaces-navegacion a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        document.getElementById('enlacesNavegacion').classList.remove('active');
    });
});

function manejarEnvio(evento) {
    evento.preventDefault();
    
    const datosFormulario = new FormData(evento.target);
    const nombre = datosFormulario.get('nombre');
    const email = datosFormulario.get('email');
    const telefono = datosFormulario.get('telefono');
    const servicio = datosFormulario.get('servicio');
    const mensaje = datosFormulario.get('mensaje');
    
    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto a ${email}.`);
    
    evento.target.reset();
}

function alternarAcordeon(boton) {
    const itemAcordeon = boton.closest('.item-acordeon');
    const todosItems = document.querySelectorAll('.item-acordeon');
    
    todosItems.forEach(item => {
        if (item !== itemAcordeon) {
            item.classList.remove('activo');
        }
    });
    
    itemAcordeon.classList.toggle('activo');
}

window.addEventListener('scroll', () => {
    const encabezado = document.getElementById('encabezado');
    if (window.scrollY > 50) {
        encabezado.classList.add('scrolled');
    } else {
        encabezado.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.style.opacity = '1';
                entrada.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    const elementos = document.querySelectorAll('.tarjeta-nosotros, .tarjeta-servicio, .tarjeta-portafolio, .tarjeta-lineamiento');
    
    elementos.forEach((elemento, index) => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(30px)';
        elemento.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observador.observe(elemento);
    });
});