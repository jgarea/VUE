import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app";
import 'bootstrap'

const firebaseConfig = {
  apiKey: "AIzaSyCRJ38xeQYr80dsvbbp8X2S99snwZI68JE",
  authDomain: "curso-vue-7de23.firebaseapp.com",
  projectId: "curso-vue-7de23",
  storageBucket: "curso-vue-7de23.firebasestorage.app",
  messagingSenderId: "823709846432",
  appId: "1:823709846432:web:359b20637efc362aa832c5",
  measurementId: "G-N1QBXHMVHQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
