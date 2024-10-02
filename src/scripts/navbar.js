document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('main > section'); // Asegúrate de que las secciones están dentro de <main>

  const highlightActiveLink = () => {
      let scrollPos = window.scrollY + window.innerHeight / 2; // Tomar la mitad de la altura de la ventana para el cálculo

      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const sectionId = section.getAttribute('id');

          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
              links.forEach(link => link.classList.remove('bg-accent', 'rounded-full', 'px-4', 'py-2'));

              const activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
              if (activeLink) {
                  activeLink.classList.add('bg-accent', 'rounded-full', 'px-4', 'py-2'); // Establecer relleno aquí
              }
          }
      });
  };

  window.addEventListener('scroll', highlightActiveLink);

  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault(); // Evita el comportamiento predeterminado del enlace
          const targetId = link.getAttribute('href').substring(1); // Obtén el ID de la sección
          const targetSection = document.getElementById(targetId); // Selecciona la sección objetivo

          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
  });
});
