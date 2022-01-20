<template>
  <div class="container">
    <div class="title"> <h1>As Mais Pedidas</h1></div>
    <Dish  v-for="dish in dishes" :key="dish.id" 
            :name="dish.nome" 
            :image="dish.imagem" 
            :ingredients="dish.ingredientes" 
            :price="dish.preco"
          />
  </div>
</template>

<script>
import Dish from "../components/Dish.vue"

export default {
  name:'MostReq'
}
</script>

<style>
  .container{
  position: absolute;
  z-index: 11;
  position: relative;
  width: 85%;
  height: 100%;
  left: 15%;
  display: flex;
  flex-direction: column;
  }
</style>