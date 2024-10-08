//imports
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/css/main.css';
import './assets/js/main.js';

createApp(App)
  .use(router)
  .mount('#app');