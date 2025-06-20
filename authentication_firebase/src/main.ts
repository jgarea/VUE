import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app";
import 'bootstrap'
import VueCookies from 'vue-cookies';
import VueSession from 'vue-session';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).use(VueCookies,
{
    expires: '1d', // 1 day
}
).use(VueSession).mount('#app')

// $cookies.set('cookieName', 'cookieValue', expires, path, domain, secure, sameSite); // Set a cookie with name, value and options
// $cookies.set('cookieName', 'cookieValue', '1d'); // Set a cookie with name, value and expiration
// $cookies.get('cookieName'); // Get a cookie by name
// $cookies.remove('cookieName'); // Remove a cookie by name
// $cookies.isKey('cookieName'); // Check if a cookie exists
// $cookies.keys(); // Get all cookie names
// $cookies.getAll(); // Get all cookies

// $session.start(); // Start a session
// $session.set('sessionKey', 'sessionValue'); // Set a session variable
// $session.get('sessionKey'); // Get a session variable
// $session.remove('sessionKey'); // Remove a session variable
// $session.id(); // Get the session ID
// $session.renew(); // Renew the session