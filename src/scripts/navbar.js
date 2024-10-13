document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const indicator = document.getElementById('active-indicator');
  const ledBar = document.getElementById('led-bar');
  const sections = document.querySelectorAll('main > section');
  const navHeight = document.querySelector('nav').offsetHeight; // Obtener la altura del nav
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

  // Función para cambiar el idioma y actualizar la bandera y los textos en la barra de navegación y las secciones
  window.changeLanguage = (lang, flagSrc) => {
    // Cambiar la imagen de la bandera en el botón de idioma
    currentFlagIcon.src = flagSrc;

    // Actualizar los textos de navegación y las secciones según el idioma seleccionado
    if (lang === 'de') {
      // Navegación
      document.getElementById('nav-aboutMe').textContent = "Über mich";
      document.getElementById('nav-skills').textContent = "Fähigkeiten";
      document.getElementById('nav-education').textContent = "Ausbildung";
      document.getElementById('nav-projects').textContent = "Projekte";
      document.getElementById('nav-contact').textContent = "Kontakt";

      // Sección Hero y Sobre mí
      welcomeText.textContent = "WILLKOMMEN";
      imText.textContent = "Ich bin";
      computerScienceText.textContent = "Applikationsentwickler Student";
      aboutTitle.textContent = "ÜBER MICH";
      aboutSubtitle.textContent = "Über mich";
      aboutGreeting.textContent = "HALLO, ICH BIN LUIS";
      ageSpan.textContent = "18 Jahre alt";
      roleSpan.textContent = "Applikationsentwickler Student";
      skillsSpans.textContent = "Frontend und Backend";

      // Proyectos
      document.getElementById('projects-title').textContent = "PROJEKTE";
      document.getElementById('projects-subtitle').textContent = "Projekte";
      document.getElementById('project1-title').textContent = "Tic Tac Toe mit KI";
      document.getElementById('project1-description').innerHTML = "CsBe, 24 - Dies ist mein eigenes Tic-Tac-Toe-Spiel mit eigenem vs. KI-Modus";
      document.getElementById('project2-title').textContent = "Real Madrid Website";
      document.getElementById('project2-description').innerHTML = "CsBe, 24 - Dies ist eine responsive Website basierend auf Real Madrid";
      document.getElementById('project3-title').textContent = "Online Shop mit AJAX";
      document.getElementById('project3-description').innerHTML = "CsBe, 24 - Dies ist ein Online-Musikshop mit implementiertem AJAX";

      // Contacto
      document.getElementById('contact-title').textContent = "KONTAKT";
      document.getElementById('contact-subtitle').textContent = "Kontakt";
      document.getElementById('contact-info-text').textContent = "Kontaktieren Sie mich";
      document.getElementById('contact-prompt').innerHTML = "Haben Sie eine Frage, <br>eine Idee oder ein Projekt, <br>bei dem Sie Hilfe benötigen? <br>Kontaktieren Sie mich!";
      document.getElementById('name').placeholder = "Ihr Name";
      document.getElementById('email').placeholder = "Ihre E-Mail";
      document.getElementById('subject').placeholder = "Thema";
      document.getElementById('message').placeholder = "Ihre Nachricht";
      document.getElementById('submit-button').textContent = "Einreichen";
      document.getElementById('alert-message').textContent = "Das Formular wurde erfolgreich versendet.";

      // Cambiar mensaje de copiado
      window.changeCopiedMessage('de');

      // Footer
      document.getElementById('footer-navigation-title').textContent = "NAVIGATION";
      document.getElementById('footer-aboutMe').textContent = "Über mich";
      document.getElementById('footer-skills').textContent = "Fähigkeiten";
      document.getElementById('footer-education').textContent = "Ausbildung";
      document.getElementById('footer-projects').textContent = "Projekte";
      document.getElementById('footer-contact').textContent = "Kontakt";
      document.getElementById('footer-social-title').textContent = "SOZIALE MEDIEN";
      document.getElementById('footer-rights-lg').textContent = "© 2024 Luis Fernández. Alle Rechte vorbehalten.";
      document.getElementById('footer-rights-sm').textContent = "© 2024 Luis Fernández. Alle Rechte vorbehalten.";

      // Idiomas
      germanLanguage.textContent = "Deutsch";
      spanishLanguage.textContent = "Spanisch";
      englishLanguage.textContent = "Englisch";

      skillsTitle.textContent = "FÄHIGKEITEN";
      skillsSubtitle.textContent = "Fähigkeiten";
    } else if (lang === 'en') {
      // Navegación
      document.getElementById('nav-aboutMe').textContent = "About Me";
      document.getElementById('nav-skills').textContent = "Skills";
      document.getElementById('nav-education').textContent = "Education";
      document.getElementById('nav-projects').textContent = "Projects";
      document.getElementById('nav-contact').textContent = "Contact";

      // Sección Hero y Sobre mí
      welcomeText.textContent = "WELCOME";
      imText.textContent = "I am";
      computerScienceText.textContent = "Computer Science Student";
      aboutTitle.textContent = "ABOUT ME";
      aboutSubtitle.textContent = "About Me";
      aboutGreeting.textContent = "HELLO, I'M LUIS";
      ageSpan.textContent = "18 years old";
      roleSpan.textContent = "computer science student";
      skillsSpans.textContent = "Frontend and Backend";

      // Proyectos
      document.getElementById('projects-title').textContent = "PROJECTS";
      document.getElementById('projects-subtitle').textContent = "Projects";
      document.getElementById('project1-title').textContent = "Tic Tac Toe with AI";
      document.getElementById('project1-description').innerHTML = "CsBe, 24 - This is my own Tic-Tac-Toe game with an AI mode";
      document.getElementById('project2-title').textContent = "Real Madrid Website";
      document.getElementById('project2-description').innerHTML = "CsBe, 24 - This is a responsive website based on Real Madrid";
      document.getElementById('project3-title').textContent = "Online Shop with AJAX";
      document.getElementById('project3-description').innerHTML = "CsBe, 24 - This is an online music shop with implemented AJAX";

      // Contacto
      document.getElementById('contact-title').textContent = "CONTACT";
      document.getElementById('contact-subtitle').textContent = "Contact";
      document.getElementById('contact-info-text').textContent = "Get in touch";
      document.getElementById('contact-prompt').innerHTML = "Do you have a question, <br>an idea or a project <br>you need help with? <br>Contact Me!";
      document.getElementById('name').placeholder = "Your Name";
      document.getElementById('email').placeholder = "Your Email";
      document.getElementById('subject').placeholder = "Subject";
      document.getElementById('message').placeholder = "Your Message";
      document.getElementById('submit-button').textContent = "Submit";
      document.getElementById('alert-message').textContent = "The form was submitted successfully.";

      // Cambiar mensaje de copiado
      window.changeCopiedMessage('en');

      // Footer
      document.getElementById('footer-navigation-title').textContent = "NAVIGATION";
      document.getElementById('footer-aboutMe').textContent = "About Me";
      document.getElementById('footer-skills').textContent = "Skills";
      document.getElementById('footer-education').textContent = "Education";
      document.getElementById('footer-projects').textContent = "Projects";
      document.getElementById('footer-contact').textContent = "Contact";
      document.getElementById('footer-social-title').textContent = "SOCIAL MEDIA";
      document.getElementById('footer-rights-lg').textContent = "© 2024 Luis Fernández. All rights reserved.";
      document.getElementById('footer-rights-sm').textContent = "© 2024 Luis Fernández. All rights reserved.";

      // Idiomas
      germanLanguage.textContent = "German";
      spanishLanguage.textContent = "Spanish";
      englishLanguage.textContent = "English";

      skillsTitle.textContent = "SKILLS";
      skillsSubtitle.textContent = "Skills";
    } else if (lang === 'es') {
      // Navegación
      document.getElementById('nav-aboutMe').textContent = "Sobre mí";
      document.getElementById('nav-skills').textContent = "Habilidades";
      document.getElementById('nav-education').textContent = "Educación";
      document.getElementById('nav-projects').textContent = "Proyectos";
      document.getElementById('nav-contact').textContent = "Contacto";

      // Sección Hero y Sobre mí
      welcomeText.textContent = "BIENVENIDO";
      imText.textContent = "Soy";
      computerScienceText.textContent = "Estudiante de Desarrollo de Aplicaciones";
      aboutTitle.textContent = "SOBRE MÍ";
      aboutSubtitle.textContent = "Sobre mí";
      aboutGreeting.textContent = "HOLA, SOY LUIS";
      ageSpan.textContent = "18 años";
      roleSpan.textContent = "estudiante de desarrollo de aplicaciones";
      skillsSpans.textContent = "Frontend y Backend";

      // Proyectos
      document.getElementById('projects-title').textContent = "PROYECTOS";
      document.getElementById('projects-subtitle').textContent = "Proyectos";
      document.getElementById('project1-title').textContent = "Tic Tac Toe con IA";
      document.getElementById('project1-description').innerHTML = "CsBe, 24 - Este es mi propio juego de Tic-Tac-Toe con un modo de IA";
      document.getElementById('project2-title').textContent = "Sitio web de Real Madrid";
      document.getElementById('project2-description').innerHTML = "CsBe, 24 - Este es un sitio web responsivo basado en el Real Madrid";
      document.getElementById('project3-title').textContent = "Tienda en línea con AJAX";
      document.getElementById('project3-description').innerHTML = "CsBe, 24 - Esta es una tienda de música en línea con AJAX implementado";

      // Contacto
      document.getElementById('contact-title').textContent = "CONTACTO";
      document.getElementById('contact-subtitle').textContent = "Contacto";
      document.getElementById('contact-info-text').textContent = "Ponte en contacto";
      document.getElementById('contact-prompt').innerHTML = "¿Tienes una pregunta, <br>una idea o un proyecto <br>con el que necesitas ayuda? <br>¡Contáctame!";
      document.getElementById('name').placeholder = "Tu Nombre";
      document.getElementById('email').placeholder = "Tu Correo Electrónico";
      document.getElementById('subject').placeholder = "Asunto";
      document.getElementById('message').placeholder = "Tu Mensaje";
      document.getElementById('submit-button').textContent = "Enviar";
      document.getElementById('alert-message').textContent = "El formulario se ha enviado con éxito.";

      // Cambiar mensaje de copiado
      window.changeCopiedMessage('es');

      // Footer
      document.getElementById('footer-navigation-title').textContent = "NAVEGACIÓN";
      document.getElementById('footer-aboutMe').textContent = "Sobre mí";
      document.getElementById('footer-skills').textContent = "Habilidades";
      document.getElementById('footer-education').textContent = "Educación";
      document.getElementById('footer-projects').textContent = "Proyectos";
      document.getElementById('footer-contact').textContent = "Contacto";
      document.getElementById('footer-social-title').textContent = "REDES SOCIALES";
      document.getElementById('footer-rights-lg').textContent = "© 2024 Luis Fernández. Todos los derechos reservados.";
      document.getElementById('footer-rights-sm').textContent = "© 2024 Luis Fernández. Todos los derechos reservados.";

      // Idiomas
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

  // Función para cambiar el idioma del mensaje de copiado
  window.changeCopiedMessage = (lang) => {
    const copiedMsgElements = document.querySelectorAll('#copied-msg');
    copiedMsgElements.forEach((element) => {
      if (lang === 'de') {
        element.textContent = '📋 Kopiert!';
      } else if (lang === 'en') {
        element.textContent = '📋 Copied!';
      } else if (lang === 'es') {
        element.textContent = '📋 Copiado!';
      }
    });
  };
});
