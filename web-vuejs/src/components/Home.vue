<template>
  <div class="bigContainer">
    <!-- Container Geral de Todo Conteúdo-->
    <div class="mainContainer">
      <!--Todo Conteúdo que estará à Direita do App (ou seja, ao lado da Nav Bar)-->
      <div class="header"> 
      <!-- Cabeçalho do App-->
        <div class="searchBar">Search</div> 
        <div class="user">
          <div class="notificationBell">Sino</div> 
          <div class="userIcon">Ícone do User</div>
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

      <div class="menu">
      <!-- O Cardápio com as Opções-->

        <Dish/>
        <Dish/>
        <Dish/>
        <Dish/>

      </div>
    </div>
  </div>
</template>

<script>

import Dish from "./Dish.vue"


export default {
  name: 'Home',

  components: {
    Dish
  }
}
</script>

