const cartModule = {
  namespaced: true,

  state: {
    cart: [
      // Dados de um prato/bebida no carrinho (array de objetos {})
      // id produto
      // name
      // image
      // ingredients
      // price
      // total price
      // quantity
    ],
  },

  mutations: {
    addDishCart(state, dish) {
      state.cart.push(dish)
    },

    deleteCart(state) {
      state.cart = [];
    },

    deleteDishCart(state, dishName) {
      state.cart = state.cart.filter((item) => {
        return dishName != item.name
      })
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
  }
}

export default cartModule