import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '@/components/WelcomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import WorkPage from '@/components/WorkPage.vue';

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/about', component: AboutPage },
  { path: '/work', component: WorkPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;