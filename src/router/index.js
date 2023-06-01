import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home/index.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = new Router({
  mode: "hash",
  routes,
});
export default router;
