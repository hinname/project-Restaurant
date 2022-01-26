const state = {
  cartItems: []
}

const mutations = {
  UPDATE_CART_ITEMS (state, payload) {
    state.cartItems = payload;
  }
}

const actions = {
  getCartItems ({ commit }) {
      commit('UPDATE_CART_ITEMS')
  },
  addCartItem ({ commit }) {
    let cartProducts = []

    let cartProductExists = false;

    cartProducts.map((cartProduct) => {
          if (cartProduct.id === 1) {
                cartProduct.quantity++;
                cartProductExists = true;
          }
    });

    if (!cartProductExists) {
          cartProducts.push(this.prato)
    }

    console.log(cartProducts)

    commit('UPDATE_CART_ITEMS', JSON.stringify(cartProducts))
  },

  removeCartItem ({ commit }, cartItem) {
    //puxando o elemento Cart
    var cartProducts = JSON.parse(localStorage.getItem('Cart'));
    cartProducts.map((cartProduct) => {
      //id = 1 por puxar um unico elemento, a pizza
      if (cartProduct.id === 1 && cartProduct.quantity > 1) {
      cartProduct.quantity--;
      //removendo o elemento caso a quantidade seja 1
      } else if (cartProduct.id === 1 && cartProduct.quantity === 1) {
      const cartIndexToRemove = cartProducts.findIndex(cartProduct => cartProduct.id === 1);
      cartProducts.splice(cartIndexToRemove, 1);
      }
    });
    //guardando a informação no elemento Cart

    console.log(cartProducts)

    commit('UPDATE_CART_ITEMS', JSON.stringify(cartProducts))

  },
  removeAllCartItems ({ commit }) {
    cartProducts = [];
    commit('UPDATE_CART_ITEMS', JSON.stringify(cartProducts))
}
