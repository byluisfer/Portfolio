
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const indicator = document.getElementById('active-indicator');

    // Mover el indicador basado en el índice del enlace clicado
    links.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Obtener las dimensiones y posición del enlace clicado
        const linkRect = link.getBoundingClientRect();

        // Ajustar el tamaño del indicador y su posición según el enlace
        indicator.style.width = `${linkRect.width}px`;
        indicator.style.left = `${link.offsetLeft}px`;

        // Obtener la sección correspondiente al ID del enlace
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Hacer scroll suave hacia la sección seleccionada
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Ajustar el indicador con el scroll de la página
    const sections = document.querySelectorAll('main > section');
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        // Verificar si el scroll actual está dentro de la sección
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
          if (activeLink) {
            // Ajustar el tamaño del indicador y su posición según el enlace activo
            const activeLinkRect = activeLink.getBoundingClientRect();
            indicator.style.width = `${activeLinkRect.width}px`;
            indicator.style.left = `${activeLink.offsetLeft}px`;
          }
        }
      });
    });
  });