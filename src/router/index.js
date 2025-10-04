import { createRouter, createWebHistory } from "vue-router";
import Store from "../components/ProductStore.vue";
import ShoppingCart from "../components/ShoppingCart.vue";

const routes = [
  { path: "/", component: Store },
  { path: "/cart", component: ShoppingCart },
  { path: "/:pathMatch(.*)*", redirect: "/" } // Vue 3 wildcard redirect
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
