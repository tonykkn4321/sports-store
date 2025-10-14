import { createRouter, createWebHistory } from "vue-router";
import Store from "../components/ProductStore.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
import CheckoutPage from "../components/CheckoutPage";
import OrderThanks from "../components/OrderThanks";

const routes = [
  { path: "/", component: Store },
  { path: "/cart", component: ShoppingCart },
  { path: "/checkout", component: CheckoutPage},
  { path: "/thanks/:id", component: OrderThanks},
  { path: "/:pathMatch(.*)*", redirect: "/" } // Vue 3 wildcard redirect
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
