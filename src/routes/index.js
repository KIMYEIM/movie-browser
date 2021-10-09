import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import Movies from './Movies';
import NotFound from './NotFound';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Movies',
      path: '/movies/:title',
      component: Movies,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});