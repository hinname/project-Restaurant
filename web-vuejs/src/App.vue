<template>
  <div class="main light">
    <NavBar/>
    <RouterView></RouterView>
  </div>
  <Settings id="settings"/>
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
  name: 'App',
  components: {
    NavBar
  },
  methods:{
    data(){
      let dark
      return{
        dark: !dark
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--darOne);
  margin: 0;
  padding: 0;
}

p,h1,h2,h3,li,a{
  color: var(--DarkOne)
}

#settings{
  display:none
}


.light {
     --backgroundColor: #a1ce46;
     /*--backgroundImage: url(); */
     --darOne: #312f3a;
     --darkTwo: #45424b;
     --lightOne: white;
     --lightTwo: rgb(238, 237, 237);
     --lightThree: rgb(221, 220, 219);
   }

   .dark {
     --backgroundColor: #171c25;
     --darOne: #f3f3f3;
     --darkTwo: #fff;
     --lightOne: #555558;
     --lightTwo: #919191;
     --lightThree: rgb(199, 198, 198);
   }

*,html,body{
  margin: 0;
  padding: 0;
}

.main {

  overflow-x: hidden;
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index:1;

  background: var(--lightThree);

  font-family: 'Roboto';
}
</style>
