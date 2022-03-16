<template>
  <!-- classe main sempre ativa. Se isDark é true, tema dark, senão tema light-->
  <div :class="['main', $store.state.dark ? 'dark' : 'light']">
    <NavBar/>
    <RouterView></RouterView>
  </div>
  <Settings id="settings"/>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import Settings from "./views/Settings.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    Settings
  },
  
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
      --backgroundColor: #98C739;
      /*--backgroundImage: url(); */
      --darkOne: #0f0f11;
      --darkTwo: #302e35;
      --lightOne: rgb(247, 243, 243);
      --lightTwo: rgb(238, 237, 237);
      --lightThree: rgb(221, 220, 219);
      --lightFour: #fff;
      --lightFive:rgba(255, 255, 255, 0.925);
      --buttonBgColorOne: #A1CE46;
      --buttonBgColorOneHover: #99be4e;
      --buttonBgColorTwo: rgb(255, 29, 29);
      --buttonBgColorTwoHover: rgb(207, 16, 16);
      --buttonFontOne: rgba(255, 255, 255, 0.925);
   }

   .dark {
      --backgroundColor: #262F3E;
      --darkOne: #f3f3f3;
      --darkTwo: rgb(242, 241, 241);
      --lightOne: #0f0f11;
      --lightTwo: #302e35;
      --lightThree: rgb(167, 165, 165);
      --lightFour: #212024;
      --lightFive:#171718;
      --buttonBgColorOne: #8cc717;
      --buttonBgColorOneHover: #71a014;
      --buttonBgColorTwo: rgb(228, 24, 24);
      --buttonBgColorTwoHover: rgb(207, 16, 16);
      --buttonFontOne: #0f0f11;
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

  background: var(--lightTwo);

  font-family: 'Roboto';
}
</style>
