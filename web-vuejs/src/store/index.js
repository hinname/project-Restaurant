import { createStore } from 'vuex'
import cartModule from './Modules/Cart'
import orderModule from './Modules/Orders';

export default createStore({
  state: {
    dark: false,
    
  },
  mutations: {
    changeDarkMode(state) {
      state.dark = !state.dark;
    },

  },
  actions: {
    
  },
  modules: {
    cartModule,
    orderModule,
  }
})
