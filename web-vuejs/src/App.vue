<template>
  <div class="main">
    <NavBar/>
    <Home/>
  </div>
  
</template>

<script>
import NavBar from "./components/NavBar.vue"
import Home from './components/Home.vue'

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

.bigContainer{
  overflow-x: hidden;
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index:1;
}

.mainContainer{
  position: relative;
  width: 85%;
  height: 100%;
  left: 15%;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  background: rgb(238, 234, 226);
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
