import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/contact.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/about',
    name: 'about',
    alias: '/about-us',
    component: About,
  },
  {
    path: '/home',
    name: 'home2',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
