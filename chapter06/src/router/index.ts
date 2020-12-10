import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contact from '../views/contact.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import AuthenticationMiddleware from './middleware/authentication';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      authenticated: false,
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      authenticated: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      authenticated: false,
    },
  },
  {
    path: '/about',
    name: 'about',
    alias: '/about-us',
    component: About,
    meta: {
      authenticated: false,
    },
  },
  {
    path: '/home',
    name: 'home2',
    redirect: '/',
    meta: {
      authenticated: false,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(AuthenticationMiddleware);

export default router;
