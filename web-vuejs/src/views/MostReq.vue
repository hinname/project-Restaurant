<template>
  <div class="mostReqPop">
    <div class="container">
    <div class="title"> 
      <h1>Os Mais Pedidos</h1>
      <p>Os mais pedidos de cada categoria</p>
    </div>
    <div class="menuAlternative" v-if="notFoundDishes">
        <div class="dishNotFound" >
          <h1>Pratos não encontrados!</h1>
        </div>
    </div>
      <div v-else class="menu">
        <div class="dish">
          <h3>Principal prato</h3>
          <Dish 
            :id="mostReqMainDish.id"
            :name="mostReqMainDish.nome"
            :image="mostReqMainDish.imagem"
            :ingredients="mostReqMainDish.ingredientes"
            :price="mostReqMainDish.preco"
          />
        </div>
        <div class="dish">
          <h3>Sobremesa</h3>
          <Dish
            :id="mostReqDessert.id"
            :name="mostReqDessert.nome"
            :image="mostReqDessert.imagem"
            :ingredients="mostReqDessert.ingredientes"
            :price="mostReqDessert.preco"
          />
        </div>
        <div class="dish">
          <h3>Bebida</h3>
          <Dish
            :id="mostReqDrink.id"
            :name="mostReqDrink.nome"
            :image="mostReqDrink.imagem"
            :ingredients="mostReqDrink.ingredientes"
            :price="mostReqDrink.preco"
          />
        </div>
        
      </div>
    </div>
    <div class="overlay">
      <Overlay/>
    </div>
    <div id="closeButtom" @click="$emit('closePopUp')">
        <div class="closeBar" id="bar1"></div>
        <div class="closeBar" id="bar2"></div>
    </div>
  </div>
  
  
</template>

<script>
import Dish from "../components/Dish.vue"
import Overlay from "../components/Overlay.vue"

//Importando instância do axios do api.js
import api from "../services/api.js"

export default {
  name:'MostReq',

  emits: ['closePopUp'],

  props: {
    show: Boolean,
  },

  components:{
    Dish, Overlay
  },

  data() {
    return {
      notFoundDishes : false,
      mostReqMainDish: {},
      mostReqDessert: {},
      mostReqDrink: {}
    }
  },

  created() {
    
    //most req comidas
    api.get('mostreq/comidas').then(response => {
      this.mostReqMainDish = response.data; //dados de resposta dessa página (json de todos os pratos) são colocados na variável dishes
    })
    .catch(err => {
      console.log(err)
      this.notFoundDishes = true
    });

    //most req sobremesas
    api.get('mostreq/sobremesas').then(response => {
      this.mostReqDessert = response.data; //dados de resposta dessa página (json de todos os pratos) são colocados na variável dishes
    })
    .catch(err => {
      console.log(err)
      this.notFoundDishes = true
    })

    //most req bebidas
    api.get('mostreq/bebidas').then(response => {
      this.mostReqDrink = response.data; //dados de resposta dessa página (json de todos os pratos) são colocados na variável dishes
    })
    .catch(err => {
      console.log(err)
      this.notFoundDishes = true
    })
  }
  
}


</script>

<style scoped>
  .mostReqPop{
      display: flex;
      z-index: 8;
      height: 0;
  }

  .container{
  position: absolute;
  display: flex;
  z-index: 8;
  width: 85%;
  height: 100%;
  left: 15%;
  flex-direction: column;
  }

  .title{
    color: whitesmoke;
    text-align: center;
    margin-top: 4rem;
  }
  .menu{
  position: relative;
  display:grid;
  height: 50%;
  grid-template-columns: repeat(3, 2fr);
  justify-items: center;
  margin-top: 3rem;
  }

  .dish {
    display: flex;
    color: whitesmoke;
    text-align: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 90%;
  }

  .dish .dishes{
    width: 70%;
    margin: 1rem 0;
  }

  .menuAlternative {
  height: 100%;
  text-align: center;
  margin-top: 3rem;
}

.dishNotFound {
  color: var(--darkOne);
}


  #closeButtom{
    position: relative;
    display: flex;
    width: 2rem;
    height: 2rem;
    align-items: center;
    left:95%;
    top:4%;
    cursor: pointer;
    z-index: 8;
  }

  .closeBar{
    position: absolute;
    width: 100%;
    height: 0.3rem;
    border-radius: 0.4rem;
    background-color: rgb(201, 196, 196);
  }

  #bar1{
      transform: translateX(0) rotate(45deg)
    }

  #bar2{
      transform: translateX(0) rotate(-45deg)
    }


  
  @media screen and (max-width: 1024px) {
  
  .menu{
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));;
  overflow-y: scroll;
  justify-items: center;
  object-fit: cover;
  }
}
</style>