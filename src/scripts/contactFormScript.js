document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const alertMessage = document.getElementById('alert-message');
  
    // Get the localized messages from the data attributes
    const successMessage = alertMessage.getAttribute('data-success-message');
    const errorMessage = alertMessage.getAttribute('data-error-message');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            form.reset();
  
            // Show confirmation message
            alertMessage.textContent = successMessage;
            alertMessage.classList.remove('hidden');
            alertMessage.classList.add('flex');
  
            //  Hide message after 3 seconds
            setTimeout(() => {
              alertMessage.classList.add('hidden');
              alertMessage.classList.remove('flex');
            }, 3000);
          } else {
            // If the answer is no OK, throw a error
            throw new Error('Network response was not ok');
          }
        })
        .catch((error) => {
          console.error('Error al enviar el formulario:', error);
  
          // Show the error message
          alertMessage.textContent = errorMessage;
          alertMessage.classList.remove('hidden');
          alertMessage.classList.add('flex');
  
          //  Hide message after 3 seconds
          setTimeout(() => {
            alertMessage.classList.add('hidden');
            alertMessage.classList.remove('flex');
          }, 3000);
        });
    });
  
    //  Event for the scroll button
    const scrollButton = document.getElementById('scroll-button');
    if (scrollButton) {
      scrollButton.addEventListener('click', () => {
        document.getElementById('contact-form-section').scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
  