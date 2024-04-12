import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Menu from "@/pages/Menu.vue";
import Cart from "@/pages/Cart.vue";
import NotFound from '@/pages/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
  { path: '/cart', component: Cart },
  { path: '/:catchAll(.*)', component: NotFound } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

