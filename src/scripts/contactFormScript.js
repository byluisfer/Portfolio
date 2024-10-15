// contactFormScript.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const alertMessage = document.getElementById('alert-message');
  
    // Obtén los mensajes localizados desde los atributos data-*
    const successMessage = alertMessage.getAttribute('data-success-message');
    const errorMessage = alertMessage.getAttribute('data-error-message');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Previene el envío y la redirección predeterminada
  
      const formData = new FormData(form);
  
      fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            form.reset();
  
            // Mostrar mensaje de confirmación
            alertMessage.textContent = successMessage;
            alertMessage.classList.remove('hidden');
            alertMessage.classList.add('flex');
  
            // Ocultar mensaje después de 3 segundos
            setTimeout(() => {
              alertMessage.classList.add('hidden');
              alertMessage.classList.remove('flex');
            }, 3000);
          } else {
            // Si la respuesta no es OK, lanza un error para ser capturado en catch
            throw new Error('Network response was not ok');
          }
        })
        .catch((error) => {
          console.error('Error al enviar el formulario:', error);
  
          // Mostrar mensaje de error
          alertMessage.textContent = errorMessage;
          alertMessage.classList.remove('hidden');
          alertMessage.classList.add('flex');
  
          // Ocultar mensaje después de 3 segundos
          setTimeout(() => {
            alertMessage.classList.add('hidden');
            alertMessage.classList.remove('flex');
          }, 3000);
        });
    });
  
    // Evento para el botón de desplazamiento (si existe)
    const scrollButton = document.getElementById('scroll-button');
    if (scrollButton) {
      scrollButton.addEventListener('click', () => {
        // Desplazarse suavemente al formulario con el id 'contact-form-section'
        document.getElementById('contact-form-section').scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
  