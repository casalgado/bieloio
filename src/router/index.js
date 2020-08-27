import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("../views/Landing.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About3.vue"),
  },
  {
    path: "/about2",
    name: "About2",
    component: () => import("../views/About2.vue"),
  },
  {
    path: "/about3",
    name: "About3",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/contact2",
    name: "Contact2",
    component: () => import("../views/Contact2.vue"),
  },
  {
    path: "/content",
    name: "Content",
    component: () => import("../views/Content.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
