import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '@/components/WelcomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import PortfolioPage from '@/components/PortfolioPage.vue';
import ContactPage from '@/components/ContactPage.vue';
import ImpressumPage from '@/components/ImpressumPage.vue';

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/about', component: AboutPage },
  { path: '/portfolio', component: PortfolioPage },
  { path: '/contact', component: ContactPage },
  { path: '/impressum', component: ImpressumPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;