import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Start the ract plugin
  .init({
    fallbackLng: 'de',
    supportedLngs: ['de', 'en', 'es'],
    defaultLocale: 'de', // Default language
    interpolation: {  
      escapeValue: false,
    },
  resources: {
    de: {
      translation: {
        aboutMe: 'Über mich',
        skills: 'Kenntisse  ',
        education: 'Ausbildung',
        projects: 'Projekte',
        contact: 'Kontakt',
        welcome: 'WILLKOMMEN',
        im: 'Ich bin',
        role: 'Applikationsentwickler Student',
        aboutmeTitle: 'ÜBER MICH',
        aboutmeSubtitle: 'Über mich',
        aboutmeGreeting: 'Hallo, ich bin Luis!',
        aboutMeDescription: 'Ich bin begeistert von der Programmierung, <span class="font-lobster led-effect age-span">18 Jahre alt</span> und derzeit in meinem zweiten Jahr als <span class="font-lobster led-effect role-span">Student für Anwendungsentwicklung</span>. Ich lerne gerne dazu und verfeinere meine Fähigkeiten, mit grundlegenden Kenntnissen in <span class="font-lobster led-effect skills-span">Frontend</span> und <span class="font-lobster led-effect">Backend</span>.',
        languages: 'SPRACHEN.',
        german: 'Deutsch',
        spanish: 'Spanisch',
        english: 'Englisch',
        skillsTitle: 'GRUNDKENNTNISSE',
        skillsSubtitle: 'Grundkenntnisse',
        educationTitle: 'AUSBILDUNG',
        educationSubtitle: 'Ausbildung',
        educationTitleCsbe: 'ICT Ausbildung',
        educationTitleMorillon: 'Sekundarschule',
        educationTitleCristoRey: 'Sekundarschule',
        educationDescribeCsbe1: 'Entwerfen und Erstellen von Webanwendungen mit HTML, CSS und JavaScript',
        educationDescribeCsbe2: 'Effektive Zusammenarbeit in Teamprojekten und selbstständige Lösung von Aufgaben',
        educationDescribeMorillon1: 'Sich schnell an eine neue akademische Umgebung anpassen und gleichzeitig in einer Fremdsprache lernen',
        educationDescribeMorillon2: 'Aufbau von Grundlagenwissen in verschiedenen Fächern und gleichzeitige Integration in die Schweizer Schulkultur',
        educationDescribeCristoRey1: 'Konsolidierung wichtiger akademischer Kenntnisse aus verschiedenen Fächern in einer dynamischen Lernumgebung',
        educationDescribeCristoRey2: 'Teilnahme an Gruppenprojekten, die Zusammenarbeit und Problemlösung fördern',
        dateCsbe: 'August 23 - Aktualität',
        dateMorillon: 'August 21 - Juli 22',
        dateCristoRey: 'September 19 - Juli 20',
        projectsTitle: 'PROJEKTE',
        projectsSubtitle: 'Projekte',
        tictactoeTitle: 'Tic Tac Toe mit KI',
        tictactoeDescribe: '- Dies ist mein eigenes Tic-Tac-Toe-Spiel mit eigenem vs. KI-Modus',
        realmadridTitle: 'Real Madrid Website',
        realmadridDescribe: '- Dies ist eine responsive Website basierend auf Real Madrid',
        onlineshopTitle: 'Online Shop mit AJAX',
        onlineshopDescribe: '- Dies ist ein Online-Musikshop mit implementiertem AJAX',
        contactTitle: 'KONTAKT',
        contactSubtitle: 'Kontakt',
        contactHero: 'Kontaktieren Sie mich',
        contactMessage: "Haben Sie eine Frage,<br>eine Idee oder ein Projekt,<br>bei dem Sie Hilfe benötigen?<br>Kontaktieren Sie mich!",
        placeholderName: 'Ihr Name',
        placeholderEmail: 'Ihre E-Mail',
        placeholderSubject: 'Thema',
        placeholderMessage: 'Ihre Nachricht',
        submitButton: 'Einreichen',
        alertMessage: 'Das Formular wurde erfolgreich versendet.',
        alertMessageSuccess: 'Das Formular wurde erfolgreich versendet.',
        alertMessageError: 'Beim Senden des Formulars ist ein Fehler aufgetreten.',
        copyright: '© 2024 Luis Fernández. Alle Rechte vorbehalten.',
        footerNavigation: 'NAVIGATION',
        footerSocialMedia: 'SOZIALE MEDIEN',
        alertCopied: '📋Kopiert!',
        available: 'Verfügbar',
      },
    },
    en: {
      translation: {
        aboutMe: 'About Me',
        skills: 'Knowledge',
        education: 'Education',
        projects: 'Projects',
        contact: 'Contact',
        welcome: 'WELCOME',
        im: 'I am',
        role: 'Informatic Student',
        aboutmeTitle: 'ABOUT ME',
        aboutmeSubtitle: 'About Me',
        aboutmeGreeting: 'Hello, I am Luis!',
        aboutMeDescription: 'I am passionate about programming, <span class="font-lobster led-effect age-span">18 years old</span> and currently in my second year as a <span class="font-lobster led-effect role-span">software development student</span>. I enjoy learning and refining my skills, with basic knowledge in both <span class="font-lobster led-effect skills-span">Frontend</span> and <span class="font-lobster led-effect">Backend</span>.',
        languages: 'LANGUAGES.',
        german: 'German',
        spanish: 'Spanish',
        english: 'English',
        skillsTitle: 'BASIC KNOWLEDGE',
        skillsSubtitle: 'Basic knowledge',
        educationTitle: 'EDUCATION',
        educationSubtitle: 'Education',
        educationTitleCsbe: 'ICT School',
        educationTitleMorillon: 'Secondary School',
        educationTitleCristoRey: 'Secondary School',
        educationDescribeCsbe1: 'Design and create web applications with HTML, CSS and JavaScript',
        educationDescribeCsbe2: 'Collaborating effectively in team projects and independently solving tasks',
        educationDescribeMorillon1: 'Quickly adapt to a new academic environment and learn in a foreign language at the same time',
        educationDescribeMorillon2: 'Build basic knowledge in different subjects and integrate it into the Swiss school culture',
        educationDescribeCristoRey1: 'Consolidation of important academic knowledge from different subjects in a dynamic learning environment',
        educationDescribeCristoRey2: 'Participation in group projects, collaboration and problem-solving',
        dateCsbe: 'August 23 - Current',
        dateMorillon: 'August 21 - July 22',
        dateCristoRey: 'September 19 - July 20',
        projectsTitle: 'PROJECTS',
        projectsSubtitle: 'Projects',
        tictactoeTitle: 'Tic Tac Toe with AI',
        tictactoeDescribe: '- This is my own Tic-Tac-Toe game with my own vs. AI mode',
        realmadridTitle: 'Real Madrid Website',
        realmadridDescribe: '- This is a responsive website based on Real Madrid',
        onlineshopTitle: 'Online Shop with AJAX',
        onlineshopDescribe: '- This is an online music shop with implemented AJAX',
        contactTitle: 'CONTACT',
        contactSubtitle: 'Contact',
        contactHero: 'Contact me',
        contactMessage: "Do you have a question,<br>an idea or a project,<br>that you need help with?<br>Contact me!",
        placeholderName: 'Your Name',
        placeholderEmail: 'Your Email',
        placeholderSubject: 'Subject',
        placeholderMessage: 'Your Message',
        submitButton: 'Submit',
        alertMessage: 'The form has been successfully sent.',
        alertMessageSuccess: 'The form has been successfully sent.',
        alertMessageError: 'An error occurred while sending the form.',
        copyright: '© 2024 Luis Fernández. All rights reserved.',
        footerNavigation: 'NAVIGATION',
        footerSocialMedia: 'SOCIAL MEDIA',
        alertCopied: '📋Copied!',
        available: 'Available for work',
      },
    },
    es: {
      translation: {
        aboutMe: 'Sobre mí',
        skills: 'Conocimientos',
        education: 'Educación',
        projects: 'Proyectos',
        contact: 'Contacto',
        welcome: 'BIENVENIDO',
        im: 'Soy',
        role: 'Estudiante de Informatica',
        aboutmeTitle: 'SOBRE MÍ',
        aboutmeSubtitle: 'Sobre mí',
        aboutmeGreeting: 'Hola, soy Luis!',
        aboutMeDescription: 'Soy un apasionado de la programación, con <span class="font-lobster led-effect age-span">18 años</span> y actualmente en mi segundo año como <span class="font-lobster led-effect role-span">estudiante de desarrollo de aplicaciones</span>. Disfruto aprendiendo y perfeccionando mis habilidades, con conocimientos básicos tanto en <span class="font-lobster led-effect skills-span">Frontend</span> como en <span class="font-lobster led-effect">Backend</span>.',
        languages: 'IDIOMAS.',
        german: 'Aleman',
        spanish: 'Español',
        english: 'Ingles',
        skillsTitle: 'CONOCIMIENTOS BÁSICOS',
        skillsSubtitle: 'Conocimientos basicos',
        educationTitle: 'EDUCACIÓN',
        educationSubtitle: 'Educación',
        educationTitleCsbe: 'Formación en TIC',
        educationTitleMorillon: 'Escuela Secundaria',
        educationTitleCristoRey: 'Escuela Secundaria',
        educationDescribeCsbe1: 'Diseño y creación de aplicaciones web con HTML, CSS y JavaScript',
        educationDescribeCsbe2: 'Colaboración efectiva en proyectos de equipo y resolución independiente de tareas',
        educationDescribeMorillon1: 'Adaptarse rápidamente a una nueva entorno académico y aprender en un idioma extra al mismo tiempo',
        educationDescribeMorillon2: 'Construir conocimientos básicos en diferentes áreas y integrarlos en la cultura escolar suiza',
        educationDescribeCristoRey1: 'Consolidación de conocimientos académicos importantes de diferentes áreas en un entorno de aprendizaje dinámico',
        educationDescribeCristoRey2: 'Participación en proyectos de grupo, colaboración y resolución de problemas',
        dateCsbe: 'Agosto 23 - Actual',
        dateMorillon: 'Agosto 21 - Julio 22',
        dateCristoRey: 'Septiembre 19 - Julio 20',
        projectsTitle: 'PROYECTOS',
        projectsSubtitle: 'Proyectos',
        tictactoeTitle: 'Tic Tac Toe con IA',
        tictactoeDescribe: '- Este es mi propio juego de Tic-Tac-Toe con mi propio modo vs. IA',
        realmadridTitle: 'Real Madrid Website',
        realmadridDescribe: '- Este es un sitio web responsive basado en Real Madrid',
        onlineshopTitle: 'Tienda en línea con AJAX',
        onlineshopDescribe: '- Este es un tienda en línea de música con implementación de AJAX',
        contactTitle: 'CONTACTO',
        contactSubtitle: 'Contacto',
        contactHero: 'Contáctame',
        contactMessage: "¿Tiene una pregunta,<br>una idea o un proyecto,<br>que necesite ayuda?<br>Contáctame!",
        placeholderName: 'Su Nombre',
        placeholderEmail: 'Su Correo Electrónico',
        placeholderSubject: 'Asunto',
        placeholderMessage: 'Su Mensaje',
        submitButton: 'Enviar',
        alertMessage: 'El formulario ha sido enviado con éxito.',
        alertMessageSuccess: 'El formulario ha sido enviado con éxito.',
        alertMessageError: 'Ocurrió un error al enviar el formulario.',
        copyright: '© 2024 Luis Fernández. Todos los derechos reservados.',
        footerNavigation: 'NAVEGACIÓN',
        footerSocialMedia: 'REDES SOCIALES',
        alertCopied: '📋Copiado!',
        available: 'Disponible para trabajar',
      },
    },
  },
});

export default i18n;