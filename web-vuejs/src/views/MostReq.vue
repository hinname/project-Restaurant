<template>
  <div class="container">
    <div class="title"> <h1>Os Mais Pedidos</h1></div>
      <div class="menu">
        <Dish/>
        <Dish/>
        <Dish/>
      </div>
  </div>
  <div class="overlay">
     <Overlay/>
  </div>
</template>

<script>
import Dish from "../components/Dish.vue"
import Overlay from "../components/Overlay.vue"

export default {
  name:'MostReq',
  components:{
    Dish, Overlay
  },
}


</script>

<style scoped>
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
  margin-top: 2rem;
  }
</style>