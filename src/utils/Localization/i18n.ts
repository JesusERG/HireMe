import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      // Login
      loginTitle: 'Enter you login information',
      password: 'Password',
      rememberMe: 'Remember Me',
      forgotPassword: 'Forgot your password?',
      noAccount: "Don't have an account?",
      signUp: 'Sign Up',
      or: '  or  ',
      login: 'Login',
      googleLogin: 'Login with Google',
      facebookLogin: 'Login with Facebook',

      // SignUp
      signUpTitle: 'Enter you sign up information',
      name: 'Name',
      confirmPassword: 'Confirm Password',
      yesAccount: 'Already have an account?',
      signIn: 'Sign in here',

      // User
      user: 'User',
      payment: 'Payment',
      settings: 'Settings',
      hi: 'Hi',
      logout: 'Logout',

      //UserInfo
      username: 'Username',
      changeProfilePicture: 'Change profile picture',

      //Payment
      paymentMethod: 'Payment Method',
      cardNumber: 'Card Number',
      cvv: 'CVV',
      expirationDate: 'Expiration Date',

      // Settings
      theme: 'Theme',
      language: 'Language',
      changeLanguage: 'Change Language',
      logout: 'Logout',

      //Modal
      modalCancel: 'Cancel',
      modalConfirm: 'Confirm',
    },
  },
  es: {
    translation: {
      // Login
      loginTitle: 'Ingresa tu información',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      forgotPassword: '¿Olvidaste tu contraseña?',
      noAccount: '¿No tienes una cuenta?',
      signUp: 'Regístrate',
      or: '  o  ',
      login: 'Ingresar',
      googleLogin: 'Ingresa con Google',
      facebookLogin: 'Ingresa con Facebook',

      // SignUp
      signUpTitle: 'Ingresa tu información',
      name: 'Nombre',
      confirmPassword: 'Confirmar Contraseña',
      yesAccount: '¿Ya tienes una cuenta?',
      signIn: 'Ingresa aquí',

      // User
      user: 'Usuario',
      payment: 'Pago',
      settings: 'Configuración',
      hi: 'Hola',
      logout: 'Cerrar sesión',

      //UserInfo
      username: 'Nombre de usuario',
      changeProfilePicture: 'Cambiar foto de perfil',

      //Payment
      paymentMethod: 'Método de pago',
      cardNumber: 'Número de tarjeta',
      cvv: 'CVV',
      expirationDate: 'Fecha de expiración',

      // Settings
      theme: 'Tema',
      language: 'Idioma',
      changeLanguage: 'Cambiar idioma',
      logout: 'Cerrar sesión',

      //Modal
      modalCancel: 'Cancelar',
      modalConfirm: 'Confirmar',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
