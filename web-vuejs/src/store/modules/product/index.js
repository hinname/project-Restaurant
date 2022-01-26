import axios from 'axios';

const state = {
  productItems: []
}

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const mutations = {
  UPDATE_PRODUCT_ITEMS (state, payload) {
    state.productItems = payload;
  }
}

const actions = {
  getProductItems ({ commit }) {
    api.get('dishes').then((response) => {
      commit('UPDATE_PRODUCT_ITEMS', response.data)
    });
  }
}
