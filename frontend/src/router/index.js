import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '@/components/WelcomePage.vue';

const routes = [
  { path: '/', component: WelcomePage },
  // Other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;