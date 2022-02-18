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

    addDishCart(state, dish) {
      state.cart.push(dish)
    },

    deleteCart(state) {
      state.cart = [];
    },

    addExistingDish(state, dish) {
      const existingDish = state.cart.find((Exdish) => {
        return dish.name == Exdish.name
      })

      existingDish.quantity++;
      return
    }

  },
  actions: {
    addDishCart(context, dish) {
      const existingDish = context.state.cart.find((Exdish) => {
        return dish.name == Exdish.name
      })

      if(existingDish) {
        context.commit('addExistingDish', existingDish)
        return
      }

      context.commit('addDishCart', dish)
    }
  },
  modules: {
  }
})
