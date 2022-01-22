import { createStore } from 'vuex'

export default createStore({
  state: {
    dark: false,
    cart: [
      // Dados de um prato/bebida no carrinho (array de objetos {})
      // id produto
      // name
      // image
      // ingredients
      // price
      // quantity
    ],
  },
  mutations: {
    changeDarkMode(state) {
      state.dark = !state.dark;
    },

    addDishCart(state, payload) {
      state.cart.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
