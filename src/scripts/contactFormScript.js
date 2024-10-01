document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío y la redirección predeterminada

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
    }).then(response => {
        form.reset();

        // Mostrar mensaje de confirmación
        const alertMessage = document.getElementById('alert-message');
        alertMessage.classList.remove('hidden');
        alertMessage.classList.add('flex');

        // Ocultar mensaje después de 3 segundos
        setTimeout(() => {
            alertMessage.classList.add('hidden');
            alertMessage.classList.remove('flex');
        }, 3000);
    }).catch(error => {
        console.error('Error al enviar el formulario:', error);
    });
});
  document.getElementById('scroll-button').addEventListener('click', () => {
    // Desplazarse suavemente al formulario con el id 'contact-form-section'
    document.getElementById('contact-form-section').scrollIntoView({ behavior: 'smooth' });
  });

