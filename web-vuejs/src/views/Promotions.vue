<template>
  <div class="mostReqPop">
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
    <div id="closeButtom" @click="$emit('closePopUp')">
        <div class="closeBar" id="bar1"></div>
        <div class="closeBar" id="bar2"></div>
    </div>
  </div>
  
  
</template>

<script>
import Dish from "../components/Dish.vue"
import Overlay from "../components/Overlay.vue"

export default {
  name:'MostReq',

  emits: ['closePopUp'],

  props: {
    show: Boolean,
  },

  components:{
    Dish, Overlay
  },

  
}


</script>

<style scoped>
  .mostReqPop{
      display: flex;
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
  margin-top: 2rem;
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
</style>