import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: "login",
    path: "/",
    component: () => import("./views/Start.vue"),
  },
  {
    name: 'select',
    path: '/select',
    component: () => import('./views/Select.vue'),
  },
  {
    name: 'question',
    path: '/question',
    component: () => import('./views/Question.vue'),
  },
  {
    name: 'results',
    path: '/results',
    component: () => import('./views/Results.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
