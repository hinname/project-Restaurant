<template>
    <!-- Container Geral de Todo Conteúdo-->
    <div class="container">
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
</template>

<script>

import Dish from "../components/Dish.vue"


export default {
  name: 'Home',

  components: {
    Dish
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
  gap: 1vw;
  
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
  background: whitesmoke;
}

.header .user{
  display: flex;
  gap: 3rem;
}

.filters{
  height: 12vh;
  display: flex;
  flex-direction: column;
  gap:1rem;
  padding: 1rem;
  background: whitesmoke;
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

.menu{
  position: relative;
  display:grid;
  grid-template-columns: repeat(3, 2fr);
  justify-items: center;
  overflow: scroll;
}

.menu > div{
  background: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>