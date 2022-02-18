<template>
    <div class="container">
      <div class="title">
        <h1>Cesta</h1>
      </div>
      <div class="deleteallbutton"><button @click="CartDeleteAll">Apagar Cesta</button></div>
    <div class="menu">
    <!-- O Cardápio com as Opções-->
      <!-- se a busca falhar ele imprime essa mensagem-->
      <div class="cartNotFound" v-if="notFoundCart">
        <h1>Nenhum prato na cesta!</h1>
      </div>
          <!-- para cada dish em dishes, o vue cria um componente dish passando as propriedades do prato -->
        <CartElement v-else v-for="cartElement in $store.state.cart" :key="cartElement.id"
          :name="cartElement.name"
          :image="cartElement.image"
          :ingredients="cartElement.ingredients"
          :price="cartElement.price"
          :quantity="cartElement.quantity"
        />
      </div>
    </div>
</template>

<script>
import CartElement from "../components/Cart/CartElement.vue"


export default {
  name: 'Cart',

  components: {
    CartElement
  },

  data() {
    return {
  
      cartElement: "",
      notFoundCart: false,
    }
  },

  
  created() {
    if(this.$store.state.cart.length === 0) {
      this.notFoundCart = true
    }
  },

  methods: {
        async CartDeleteAll() {
            this.$store.commit('deleteCart')

            this.notFoundCart = true
        }
  }

}
</script>

<style scoped>

.container{
  position: relative;
  width: 85%;
  height: 100%;
  left: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  gap: 1vw;

}

.title{
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.menu{
  position: relative;
  display:grid;
  height: 100%;
  justify-items: center;
  overflow: scroll;
}

.deleteallbutton{
  display: flex;
  justify-content: right;
  width: 85%;
}

</style>
