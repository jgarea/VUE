import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app";
import 'bootstrap'
import VueCookies from 'vue-cookies';

const firebaseConfig = {
  
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).use(VueCookies,
{
    expires: '1d', // 1 day
}
).mount('#app')

// $cookies.set('cookieName', 'cookieValue', expires, path, domain, secure, sameSite); // Set a cookie with name, value and options
// $cookies.set('cookieName', 'cookieValue', '1d'); // Set a cookie with name, value and expiration
// $cookies.get('cookieName'); // Get a cookie by name
// $cookies.remove('cookieName'); // Remove a cookie by name
// $cookies.isKey('cookieName'); // Check if a cookie exists
// $cookies.keys(); // Get all cookie names
// $cookies.getAll(); // Get all cookies