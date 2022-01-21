import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: "login",
    path: "/",
    component: () => import("./views/UserInput.vue"),
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
    name: 'hello',
    path: '/hello',
    component: () => import('./views/HelloWorld.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
