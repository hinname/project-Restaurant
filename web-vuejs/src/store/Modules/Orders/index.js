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
    addCartOrder(context, payload) {
      let priceOrder = 0;

      //dishes.forEach(dish => {

        //let priceReplaced = dish.price.replace(/,/g, '.')
        //priceReplaced = priceReplaced.replace('R$','')
        
        //priceOrder += parseFloat(priceReplaced)

      //});
      const dishes = payload.cart
      const priceCart = payload.price

      priceOrder = priceCart

      priceOrder = String("R$" + priceOrder)
      priceOrder = priceOrder.replace('.', ',')

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