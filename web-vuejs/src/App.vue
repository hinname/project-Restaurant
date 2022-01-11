<template>
  <div class="main">
    <NavBar/>
    <Home/>
  </div>
  
</template>

<script>
import NavBar from "./components/NavBar.vue"
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(14, 1, 1);
  margin: 0;
  padding: 0;
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
}
</style>
