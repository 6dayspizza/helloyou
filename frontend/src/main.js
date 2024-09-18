//imports
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/aurora-pack.min.css';
import './assets/css/aurora-theme-base.min.css';
import './assets/css/urku.css';
import router from './router';
import './assets/js/main.js';

createApp(App)
  .use(router)
  .mount('#app');