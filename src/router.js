import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const routes = [
  {
    path: "",
    name: "home",
    component: Home,
  },
  {
    path: "/todos",
    name: "todos",
    component: () => import("./views/Todos.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
