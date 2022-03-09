<template>
    <div class="container">
      <div class="title">
        <h1>Cesta</h1>
      </div>
      <div v-show="!notFoundCart" class="deleteallbutton"><button @click="CartDeleteAll">Apagar Cesta</button></div>
    <div class="menu">
    <!-- O Cardápio com as Opções-->
      <!-- se a busca falhar ele imprime essa mensagem-->
      <div class="cartNotFound" v-if="notFoundCart">
        <h2>Nenhum prato na cesta!</h2>
      </div>
          <!-- para cada dish em dishes, o vue cria um componente dish passando as propriedades do prato -->
        <CartElement v-else v-for="cartElement in $store.state.cartModule.cart" :key="cartElement.id"

          :name="cartElement.name"
          :image="cartElement.image"
          :ingredients="cartElement.ingredients"
          :price="cartElement.price"
          :quantity="cartElement.quantity"

          @removedItem="checkCart"
        />
      </div>

      <div v-show="!notFoundCart" class="confirmButton">
          <button @click="confirmOrder">Confirmar Pedido</button>
      </div>

      <div class="nav-space">
        <span></span>
      </div>

      <div class="popUpContainer">
        <SuccessOrder @closePopUp="closePopUp" v-show="popUp" />
      </div>
    </div>
</template>

<script>
import CartElement from "../components/Cart/CartElement.vue"
import SuccessOrder from "../components/Cart/SuccessOrder.vue"


export default {
  name: 'Cart',

  components: {
    CartElement, SuccessOrder
  },

  data() {
    return {
  
      cartElement: {},
      notFoundCart: false,
      popUp: false,

    }
  },

  
  created() {
    this.checkCart();
  },

  mounted() {
    const cartElements = document.querySelectorAll('.cartElements')

    if(!cartElements) {
      this.notFoundCart = true
    }
  },

  methods: {
        async CartDeleteAll() {
            this.$store.commit('cartModule/deleteCart')
            this.notFoundCart = true
        },

        confirmOrder() {
          this.popUp = true
        },

        checkCart() {
              if(this.$store.state.cartModule.cart.length === 0) {
                this.notFoundCart = true
              }
        },

        closePopUp(){
          this.popUp = false //sem popupAtivo
        },
  },

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
  
  display: flex;
  justify-content: right;
  padding: 0 1.5rem 0;
  margin-top: 1rem;
  top:-1rem;
}

.confirmButton button{
  padding: 1rem;
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
            margin-top:0;
      }

      .nav-space {
        height: 12vh;
      }
}



</style>
