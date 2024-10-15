// i18n.js
import i18next from 'i18next';

i18next.init({
  fallbackLng: 'de', // Idioma predeterminado
  supportedLngs: ['de', 'en', 'es'],
  resources: {
    de: {
      translation: {
        welcome: 'WILLKOMMEN',
        role: 'Applikationsentwickler Student',
        im: 'Ich bin',
        aboutmeTitle: 'ÜBER MICH',
        aboutmeSubtitle: 'Über mich',
        aboutmeGreeting: 'Hallo, ich bin Luis!',
      },
    },
    en: {
      translation: {
        welcome: 'WELCOME',
        role: 'Application Developer Student',
        im: 'I am',
        aboutmeTitle: 'ABOUT ME',
        aboutmeSubtitle: 'About Me',
        aboutmeGreeting: 'Hola, I am Luis!',
      },
    },
    es: {
      translation: {
        welcome: 'BIENVENIDO',
        role: 'Estudiante Informatica',
        im: 'Soy',
        aboutmeTitle: 'SOBRE MÍ',
        aboutmeSubtitle: 'Sobre mí',
        aboutmeGreeting: 'Hola, Soy Luis!',
      },
    },
  },
});

export default i18next;
