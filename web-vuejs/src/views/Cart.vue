<template>
    <div class="container">
      <div class="title">
        <h1>Cesta</h1>
      </div>
    <div class="menu">
    <!-- O Cardápio com as Opções-->
      <!-- se a busca falhar ele imprime essa mensagem-->
      <div class="cartNotFound" v-if="notFoundCart">
        <h1>Pratos não encontrados!</h1>
      </div>
          <!-- para cada dish em dishes, o vue cria um componente dish passando as propriedades do prato -->
        <CartElement v-else v-for="cartElement in cartElements" :key="cartElement.id"
          :name="cartElement.nome"
          :image="cartElement.imagem"
          :ingredients="cartElement.ingredientes"
          :price="cartElement.preco"
        />
      </div>
    </div>
</template>

<script>
import CartElement from "../components/CartElement.vue"

//Importando instância do axios do api.js
import api from "../services/api.js"


export default {
  name: 'Cart',

  components: {
    CartElement
  },

  data() {
    return {
      cartElements: "",
      cartElement: "",
      notFoundCart: false,
    }
  },

  //Assim que o componente Home for criado
  created() {
    //uso do axios com tipo get no /dishes
    api.get('dishes').then(response => {
      this.cartElements = response.data; //dados de resposta dessa página (json de todos os pratos) são colocados na variável dishes
    })
    .catch(err => {
      console.log(err)
      this.notFoundCart = true
    })
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

</style>
