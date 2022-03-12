<template>
      <div class="container">
            <div class="title">
                  <h1>Meus pedidos</h1>
            </div>
      <div class="menu">
            <!-- O Cardápio com as Opções-->
            <!-- se a busca falhar ele imprime essa mensagem-->
            <div class="orderNotFound" v-if="notFoundOrder">
                  <h2>Nenhum pedido realizado!</h2>
            </div>
            <!-- para cada dish em dishes, o vue cria um componente dish passando as propriedades do prato -->
            <OrderElement v-else v-for="orderElement in $store.state.orderModule.order" :key="orderElement.id"

                  :id="orderElement.id"
                  :priceOrder="orderElement.priceOrder"

            />
      </div>

      <div class="nav-space">
            <span></span>
      </div>
      </div>
</template>

<script>

import OrderElement from '../components/Orders/OrderElement.vue'

export default {
      name: 'Orders',

      components: {
            OrderElement
      },

      data() {
            return {
                  notFoundOrder: false
            }
      },

      created() {
            if(this.$store.state.orderModule.order.length === 0) {
                  this.notFoundOrder = true;
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
            display:grid;
            height: 100%;
            justify-items: center;
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