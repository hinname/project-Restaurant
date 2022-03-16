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

      dish.totalPrice = dish.totalPrice.replace(/,/g, '.')
      dish.totalPrice = dish.totalPrice.replace('R$','')

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

      
      let quantitychanged = parseInt(existingDish.quantity)
      quantitychanged++;
      existingDish.quantity = String(quantitychanged)

      let priceReplaced = existingDish.price.replace(/,/g, '.')
      priceReplaced = priceReplaced.replace('R$','')
        
      existingDish.totalPrice = parseFloat(priceReplaced) * quantitychanged

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