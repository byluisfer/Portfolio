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

  // Función para el scroll suave
  function smoothScroll(target) {
    const targetPosition = target.offsetTop - navHeight; // Ajusta el desplazamiento según la altura del navbar
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth' // Desplazamiento suave
    });
  }

  // Añadir el evento de clic a cada enlace del menú
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Evita el comportamiento predeterminado del enlace

      // Mover el indicador
      moveIndicator(link);

      // Obtener la sección correspondiente al ID del enlace
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      // Desactivar el evento de scroll mientras se desplaza
      isScrolling = true;

      // Llamar a la función de scroll suave
      smoothScroll(targetSection);

      // Reiniciar la variable de desplazamiento una vez finalice
      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Ajusta este tiempo según la duración del scroll
    });
  });

  // Ajustar el indicador con el scroll de la página
  window.addEventListener('scroll', () => {
    if (isScrolling) return; // No ejecutar si se está desplazando por clic

    let scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const sectionId = section.getAttribute('id');

      // Verificar si el scroll actual está dentro de la sección
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
        if (activeLink) {
          moveIndicator(activeLink); // Mueve el indicador si lo necesitas
        }
      }
    });
  });

  // Mover el indicador y barra LED al cargar la página según la primera sección
  const activeLink = document.querySelector('nav a');
  if (activeLink) {
    moveIndicator(activeLink);
  }

  // Funcionalidad del menú desplegable de idiomas
  const languageToggle = document.getElementById('language-toggle');
  const languageDropdown = document.getElementById('language-dropdown');
  const languageIcon = document.querySelector('#language-toggle img');

  // Función para mostrar/ocultar el menú desplegable de idiomas
  function toggleDropdown() {
    languageDropdown.classList.toggle('hidden');
  }

  // Mostrar/ocultar el menú desplegable al hacer clic en el botón de idioma
  languageToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Evitar que el clic se propague al documento
    toggleDropdown();
  });

  // Función para cambiar los textos a español y actualizar el ícono de la bandera
  const changeToSpanish = () => {
    // Cambiar el texto del hero
    document.getElementById('welcome-text').textContent = "BIENVENIDO";

    // Cambiar el texto de "Computer Science"
    document.getElementById('computer-science-text').textContent = "Ciencias de la Computación";

    // Cambiar el texto de "I'm"
    document.getElementById('im-text').textContent = "Soy";

    document.getElementById('greeting').textContent = "Hola, soy Luis 👋";
    document.getElementById('description').textContent = "Tengo 18 años, soy de España, Madrid, y actualmente soy estudiante de informática en mi segundo año y me encanta programar. Tengo conocimientos de Frontend y Backend.";

    // Cambiar textos del menú
    document.querySelector('a[href="#aboutMe"]').textContent = "Sobre Mí";
    document.querySelector('a[href="#skills"]').textContent = "Habilidades";
    document.querySelector('a[href="#education"]').textContent = "Educación";
    document.querySelector('a[href="#projects"]').textContent = "Proyectos";
    document.querySelector('a[href="#contact"]').textContent = "Contacto";

    // Cambiar la imagen del botón de idioma
    languageIcon.src = "/spanish.png"; // Cambia la ruta a la imagen de la bandera de España
  };

  // Función para cambiar los textos a inglés y actualizar el ícono de la bandera
  const changeToEnglish = () => {
    // Cambiar el texto del hero
    document.getElementById('welcome-text').textContent = "WELCOME";

    // Cambiar el texto de "Ciencias de la Computación" a "Computer Science"
    document.getElementById('computer-science-text').textContent = "Computer Science";

    // Cambiar el texto de "Soy" a "I'm"
    document.getElementById('im-text').textContent = "I'm";

    document.getElementById('greeting').textContent = "Hi, I'm Luis 👋";
    document.getElementById('description').textContent = "I am 18 years old, from Spain, Madrid and I am currently a computer science student in my second year and I love programming. I have knowledge of Frontend and Backend.";

    // Cambiar textos del menú
    document.querySelector('a[href="#aboutMe"]').textContent = "About Me";
    document.querySelector('a[href="#skills"]').textContent = "Skills";
    document.querySelector('a[href="#education"]').textContent = "Education";
    document.querySelector('a[href="#projects"]').textContent = "Projects";
    document.querySelector('a[href="#contact"]').textContent = "Contact";

    // Cambiar la imagen del botón de idioma
    languageIcon.src = "/usa.png"; // Cambia la ruta a la imagen de la bandera de USA
  };

  // Listener para cambiar al español
  const spanishFlag = document.querySelector('button[onclick="changeLanguage(\'es\')"]');
  if (spanishFlag) {
    spanishFlag.addEventListener('click', changeToSpanish);
  }

  // Listener para cambiar al inglés
  const englishFlag = document.querySelector('button[onclick="changeLanguage(\'en\')"]');
  if (englishFlag) {
    englishFlag.addEventListener('click', changeToEnglish);
  }

  // Cierra el menú desplegable si se hace clic fuera de él
  window.addEventListener('click', (event) => {
    if (!languageDropdown.contains(event.target) && !languageToggle.contains(event.target)) {
      languageDropdown.classList.add('hidden');
    }
  });
});
