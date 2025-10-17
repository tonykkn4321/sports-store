import Axios from "axios";

// const ORDERS_URL = "http://localhost:3500/orders";

// For deploying to Netlify:
const ORDERS_URL = "/.netlify/functions/orders";

export default {
  actions: {
    async storeOrder(context, order) {
      // Attach cart lines from the root state to the order
      order.cartLines = context.rootState.cart.lines;

      // Send the order to the backend and return the order ID
      return (await Axios.post(ORDERS_URL, order)).data.id;
    }
  }
}
