//imports
import { createApp } from 'vue'
import App from './App.vue'
import './assets/fonts/icomoon/style.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/css/style.css';
import router from './router';
import './assets/js/main.js';
import './assets/js/jquery-3.3.1.min.js';
import './assets/js/popper.min.js';
import './assets/js/bootstrap.min.js';
import './assets/js/jquery.sticky.js';

createApp(App)
  .use(router)
  .mount('#app');