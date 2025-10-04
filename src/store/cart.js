export default {
  namespaced: true,
  state: {
    lines: []
  },
  getters: {
    itemCount: state =>
      state.lines.reduce((total, line) => total + line.quantity, 0),
    totalPrice: state =>
      state.lines.reduce((total, line) => total + line.quantity * line.product.price, 0)
  },
  mutations: {
    addProduct(state, product) {
      const line = state.lines.find(line => line.product.id === product.id);
      if (line) {
        line.quantity++;
      } else {
        state.lines.push({ product, quantity: 1 });
      }
    },
    changeQuantity(state, { productId, quantity }) {
      const line = state.lines.find(line => line.product.id === productId);
      if (line) {
        line.quantity = quantity;
      }
    },
    removeProduct(state, productId) {
      const index = state.lines.findIndex(line => line.product.id === productId);
      if (index > -1) {
        state.lines.splice(index, 1);
      }
    }
  }
}
