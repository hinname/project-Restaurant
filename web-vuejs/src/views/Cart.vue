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

      <div class="confirmButton">
          <button>Confirmar Pedido</button>
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
  left: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;
  color: var(--darkOne);

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
}

.deleteallbutton{
  position: relative;
  display: flex;
  justify-content: right;
  padding: 0 1.5rem 0;
}


.deleteallbutton button{
  padding: 0.5rem;
  background-color: var(--buttonBgColorTwo);
  color: var(--buttonFontOne);
  border:0;
  border-radius: 3px;
  cursor: pointer;
}

.deleteallbutton button:hover{
  background-color: var(--buttonBgColorTwoHover);
}

.confirmButton{
  position: relative;
  display: flex;
  justify-content: right;
  padding: 0 1.5rem 0;
  margin-bottom: 1rem;
  top:-1rem;
}

.confirmButton button{
  padding: 0.5rem;
  background-color: var(--buttonBgColorOne);
  color: var(--buttonFontOne);
  border:0;
  border-radius: 3px;
  cursor: pointer;
}

.confirmButton button:hover{
  background-color: var(--buttonBgColorOneHover);
  color: var(--buttonFontOne);
}

@media screen and (max-width: 480px){
      .container{
            left: 0;
            width: 100%;
            height: 88vh;
            margin-top:0;
      }
}

</style>
