document.addEventListener('DOMContentLoaded', () => {
  const navBar = document.querySelector('nav');

  if (navBar) {  // Verificación para asegurarse de que navBar existe
    const links = document.querySelectorAll('nav a');
    const indicator = document.getElementById('active-indicator');
    const ledBar = document.getElementById('led-bar');
    const sections = document.querySelectorAll('main > section');
    const navHeight = navBar.offsetHeight; // Obtener la altura del nav
    let isScrolling = false; // Variable para rastrear si se está desplazando

    const languageToggle = document.getElementById('language-toggle');
    const languageDropdown = document.getElementById('language-dropdown');
    const currentFlagIcon = document.getElementById('current-flag-icon'); // Botón de idioma para pantallas grandes

    // Texto de la sección hero
    const welcomeText = document.getElementById('welcome-text');
    const nameText = document.getElementById('name-text');
    const computerScienceText = document.getElementById('computer-science-text');
    const imText = document.getElementById('im-text');

    // Texto de la sección About Me
    const aboutTitle = document.getElementById('about-title');
    const aboutSubtitle = document.getElementById('about-subtitle');
    const aboutGreeting = document.getElementById('about-greeting');
    const aboutDescription = document.getElementById('about-description');

    // Span de edad en About Me
    const ageSpan = aboutDescription.querySelector('.age-span');
    const roleSpan = aboutDescription.querySelector('.role-span');
    const skillsSpans = aboutDescription.querySelector('.skills-span');

    // Texto de la sección Skills
    const skillsTitle = document.getElementById('skills-title');
    const skillsSubtitle = document.getElementById('skills-subtitle');

    // Elementos de los nombres de idiomas en la sección About Me
    const germanLanguage = document.getElementById('german-language');
    const spanishLanguage = document.getElementById('spanish-language');
    const englishLanguage = document.getElementById('english-language');

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

    // Función para mostrar/ocultar el menú desplegable de idiomas
    function toggleDropdown() {
      languageDropdown.classList.toggle('hidden');
    }

    // Mostrar/ocultar el menú desplegable al hacer clic en el botón de idioma
    languageToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Evitar que el clic se propague al documento
      toggleDropdown();
    });

    // Función para cambiar el idioma y actualizar la bandera y los textos en la sección hero y About Me
    window.changeLanguage = (lang, flagSrc) => {
      if (currentFlagIcon) {
        currentFlagIcon.src = flagSrc; // Verificación para asegurarse de que el icono no sea null
      } else {
        console.error("No se encontró el icono de la bandera ('current-flag-icon') en el DOM.");
      }

      // Actualizar los textos según el idioma seleccionado
      if (lang === 'de') {
        // Hero section
        welcomeText.textContent = "WILLKOMMEN";
        imText.textContent = "Ich bin";
        computerScienceText.textContent = "Applikationsentwickler Student";

        // About Me section
        aboutTitle.textContent = "ÜBER MICH";
        aboutSubtitle.textContent = "Über mich";
        aboutGreeting.textContent = "HALLO, ICH BIN LUIS";
        ageSpan.textContent = "18 Jahre alt";
        roleSpan.textContent = "Applikationsentwickler Student";
        skillsSpans.textContent = "Frontend und Backend";

        // Nombres de los idiomas
        germanLanguage.textContent = "Deutsch";
        spanishLanguage.textContent = "Spanisch";
        englishLanguage.textContent = "Englisch";

        skillsTitle.textContent = "FÄHIGKEITEN";
        skillsSubtitle.textContent = "Fähigkeiten";
      } else if (lang === 'en') {
        // Hero section
        welcomeText.textContent = "WELCOME";
        imText.textContent = "I am";
        computerScienceText.textContent = "Computer Science Student";

        // About Me section
        aboutTitle.textContent = "ABOUT ME";
        aboutSubtitle.textContent = "About Me";
        aboutGreeting.textContent = "HELLO, I'M LUIS";
        ageSpan.textContent = "18 years old";
        roleSpan.textContent = "computer science student";
        skillsSpans.textContent = "Frontend and Backend";

        // Nombres de los idiomas
        germanLanguage.textContent = "German";
        spanishLanguage.textContent = "Spanish";
        englishLanguage.textContent = "English";

        skillsTitle.textContent = "SKILLS";
        skillsSubtitle.textContent = "Skills";
      } else if (lang === 'es') {
        // Hero section
        welcomeText.textContent = "BIENVENIDO";
        imText.textContent = "Soy";
        computerScienceText.textContent = "Estudiante de Informatica";

        // About Me section
        aboutTitle.textContent = "SOBRE MÍ";
        aboutSubtitle.textContent = "Sobre mí";
        aboutGreeting.textContent = "HOLA, SOY LUIS";
        ageSpan.textContent = "18 años";
        roleSpan.textContent = "estudiante de desarrollo de aplicaciones";
        skillsSpans.textContent = "Frontend y Backend";

        // Nombres de los idiomas
        germanLanguage.textContent = "Alemán";
        spanishLanguage.textContent = "Español";
        englishLanguage.textContent = "Inglés";

        skillsTitle.textContent = "HABILIDADES";
        skillsSubtitle.textContent = "Habilidades";
      }

      // Cerrar el menú desplegable después de seleccionar el idioma
      languageDropdown.classList.add('hidden');
    };

    // Cierra el menú desplegable si se hace clic fuera de él
    window.addEventListener('click', (event) => {
      if (!languageDropdown.contains(event.target) && !languageToggle.contains(event.target)) {
        languageDropdown.classList.add('hidden');
      }
    });
  } else {
    console.error("No se pudo encontrar el elemento 'nav' en el DOM.");
  }
});
