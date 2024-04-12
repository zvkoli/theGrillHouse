import { createStore } from "vuex";

export default createStore({
  state: {
    data: null,
    cart: [],
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    addToCart(state, item) {
      if (state.cart.length === 0) {
        item.number = 1;
        state.cart.push(item);
      } else {
        const index = state.cart.findIndex((product) => product.id === item.id);
        if (index !== -1) {
          state.cart[index].number++;
        } else {
          item.number = 1;
          state.cart.push(item);
        }
      }
    },
    removeFromCart(state, item) {
      if (state.cart.length === 0) {
        console.log("cart is empty");
      } else {
        const index = state.cart.findIndex((product) => product.id === item.id);
        if (index !== -1) {
          if (state.cart[index].number > 1) {
            state.cart[index].number--;
          } else {
            state.cart.splice(index, 1);
          }
        } 
      }
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const result = await response.json();
        commit("setData", result);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
});
