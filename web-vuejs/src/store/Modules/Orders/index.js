const orderModule = {

  namespaced: true,

  state: {
    order: [
      // Dados de um pedido
      // order id
      // dishes : [
        // id produto
        // name
        // image
        // ingredients
        // price
        // quantity
      // ]
      // price
    ]
  },

  mutations: {
    addOrder(state, order) {
      state.order.push(order)
    }
  },

  actions: {
    addCartOrder(context, dishes) {
      let priceOrder = 0;
      let dish = {}

      for(dish in dishes) {
        priceOrder += parseInt(dish.price)
      }

      const order = {
        id: context.state.order.length + 1,
        dishes, 
        priceOrder}

      context.commit('addOrder', order)

      return true
    }
  }

  
}

export default orderModule