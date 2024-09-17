import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '@/components/Welcome.vue';

const routes = [
  { path: '/', component: Welcome },
  // Other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;