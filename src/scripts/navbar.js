document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const indicator = document.getElementById('active-indicator');
    const ledBar = document.getElementById('led-bar');
    const sections = document.querySelectorAll('main > section');
    const navHeight = document.querySelector('nav').offsetHeight; // Obtener la altura del nav
    let isScrolling = false; // Variable para rastrear si se está desplazando
  
    // Función para mover el indicador y la barra LED
    const moveIndicator = (element) => {
      const linkRect = element.getBoundingClientRect();
  
      // Ajustar el tamaño y la posición del indicador
      indicator.style.width = `${linkRect.width}px`;
      indicator.style.left = `${element.offsetLeft}px`;
      indicator.style.height = `calc(75%)`; // Reducir la altura del indicador
      indicator.style.borderRadius = '20px'; // Reducir la redondez de los bordes
  
      // Mover la barra LED superior
      ledBar.style.width = `${linkRect.width / 2}px`; // LED más pequeño que el indicador
      ledBar.style.left = `${element.offsetLeft + linkRect.width / 4}px`; // Centrado en el indicador
    };
  
    // Mover el indicador y barra LED basado en el enlace clicado
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
        moveIndicator(link);
  
        // Obtener la sección correspondiente al ID del enlace
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        // Desactivar el evento de scroll mientras se desplaza
        isScrolling = true;
  
        // Calcular la posición correcta para el desplazamiento
        const targetPosition = targetSection.offsetTop - navHeight;
  
        // Hacer scroll manualmente a la posición calculada con desplazamiento suave
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth' // Desplazamiento suave
        });
  
        // Reiniciar la variable de desplazamiento una vez finalice
        isScrolling = false;
      });
    });
  
    // Ajustar el indicador con el scroll de la página
    window.addEventListener('scroll', () => {
      if (isScrolling) return; // No ejecutar si se está desplazando por click
  
      let scrollPos = window.scrollY + window.innerHeight / 2;
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
  
        // Verificar si el scroll actual está dentro de la sección
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
          if (activeLink) {
            moveIndicator(activeLink);
          }
        }
      });
    });
  
    // Mover el indicador y barra LED al cargar la página según la primera sección
    const activeLink = document.querySelector('nav a');
    if (activeLink) {
      moveIndicator(activeLink);
    }
  });
  