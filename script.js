// Alternar menú móvil
function alternarMenu() {
    const enlacesNavegacion = document.getElementById('enlacesNavegacion');
    enlacesNavegacion.classList.toggle('active');
}


// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.enlaces-navegacion a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        document.getElementById('enlacesNavegacion').classList.remove('active');
    });
});

// Funcion para manejar envío del formulario
function manejarEnvio(evento) {
    evento.preventDefault();
    
    // Obtener datos del formulario
    const datosFormulario = new FormData(evento.target);
    const nombre = datosFormulario.get('nombre');
    const email = datosFormulario.get('email');
    const telefono = datosFormulario.get('telefono');
    const servicio = datosFormulario.get('servicio');
    const mensaje = datosFormulario.get('mensaje');
    
    // Validación 
    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    // Simular envío del formulario
    alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto a ${email}.`);
    
    // Reiniciar formulario
    evento.target.reset();
}


