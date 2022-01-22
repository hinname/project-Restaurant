<template>
    <!-- Container Geral de Todo Conteúdo-->
    <div class="container">
      <!--Todo Conteúdo que estará à Direita do App (ou seja, ao lado da Nav Bar)-->
      <div class="header"> 
      <!-- Cabeçalho do App-->
        <div class="searchBar"> <SearchBar/> </div> 
        <div class="user">
          <div class="notificationBell"><fa :icon="['fas', 'bell']" /></div> 
          <div class="userIcon"><fa :icon="['fas', 'user']" /></div>
        </div>
      </div>
      
      <div class="filters">
      <!-- Filtragem dos Pratos do Restaurante que aparecerão no Menu logo abaixo-->
        <div class="filterTitle">
          <h3>Filtros</h3> 
        </div> 
        <div class="filterOptions">
          <p>Sobremesas</p>
          <p>Carne</p>
          <p>Frango</p>
          <p>Veganos</p>
          <p>Vegetarianos</p>
          <p>Fit</p>
          <p>Fritos</p>
          <p>Sucos</p>
          <p>Alcoólicos</p>
        </div>
      </div>

      <div class="go-cart" v-show="showButtonCart">
        <routerLink to="cart">
          Fazer pedido 
          <fa icon="angle-double-right" /> 
        </routerLink>
      </div>
      
      <!-- se a busca falhar ele imprime essa mensagem-->
      <div class="menuAlternative" v-if="notFoundDishes">
        <div class="dishNotFound" >
          <h1>Pratos não encontrados!</h1>
        </div>
      </div>


      <div class="menu" v-else>
      <!-- O Cardápio com as Opções-->
            <!-- para cada dish em dishes, o vue cria um componente dish passando as propriedades do prato -->
          <Dish  v-for="dish in dishes" :key="dish.id"
            :id="dish.id"
            :name="dish.nome" 
            :image="dish.imagem" 
            :ingredients="dish.ingredientes" 
            :price="dish.preco"
          />
      </div>
    </div>
</template>

<script>

import Dish from "../components/Dish.vue"
import SearchBar from "../components/Home/SearchBar.vue"
//Importando instância do axios do api.js
import api from "../services/api.js"


export default {
  name: 'Home',

  components: {
    Dish, SearchBar
  }, 

  data() {
    return {
      dishes: "",
      dish: "",
      notFoundDishes: false,
      showButtonCart: true
    }
  },

  //Assim que o componente Home for criado
  created() {
    //uso do axios com tipo get no /dishes
    api.get('dishes').then(response => {
      this.dishes = response.data; //dados de resposta dessa página (json de todos os pratos) são colocados na variável dishes
    })
    .catch(err => {
      console.log(err)
      this.notFoundDishes = true
    })
  }
}
</script>

<style scoped>

.container{
  position: relative;
  display: flex;
  width: 85%;
  height: 100%;
  left:15%;
  flex-direction: column;
  gap: 1vw;
  z-index: 5;
}

.mainContainer *{
  position: relative;
}

.header{
  top:0;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--lightTwo);
}

.header .searchBar{
  background-color: var(--lightOne);
  width: 50%;
  min-width: 10rem;  
  padding: 0.8rem 1rem 0.8rem;
  border-radius: 1.5rem;
}

.header .user{
  display: flex;
  margin: 0 1rem 0 ;
  gap: 3rem;
}

.filters{
  height: 12vh;
  display: flex;
  flex-direction: column;
  gap:1rem;
  padding: 1rem;
  background: var(--lightTwo);
}

.filterTitle{
  left: 2rem;
}

.filterOptions{
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.go-cart {
  margin: 1rem 0 1rem;
  text-align: right;
}

.go-cart a {
  text-decoration: none;
  background: rgb(202, 29, 29);
  color: rgba(255, 255, 255, 0.925);
  border-radius: 3px;
  padding: 1rem;
  margin: 0 1.5rem;

  opacity: 0.8;
  transition: 0.3s;
  
}

.go-cart a:hover {
  opacity: 1;
}

.menu {
  position: relative;
  display:grid;
  height: 100%;
  grid-template-columns: repeat(3, 2fr);
  justify-items: center;
  overflow: scroll;
}


.menuAlternative {
  height: 100%;
  text-align: center;
  margin-top: 2rem;
}

@media screen and (max-width: 1024px) {
  .menu{
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));;
  overflow: scroll;
  justify-items: center;
  object-fit: cover;
  }
}

</style>