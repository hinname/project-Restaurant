<template>
  <Main/>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
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
}

.navBar{
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 100vh;
  left:0;
  background: white;
  text-align: center;
  justify-content: space-between;
}

.bigLogo{
  margin-top:1rem;
}

.navBarOptions{
  display: flex;
  flex-direction: column;
  gap:1rem;
}

.navBarUser{
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap:0.5rem;
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

.dishes{
  height: 17.5rem;
  width:70%;
  margin: 1.5rem 0 1rem;
  justify-content: space-between;
  text-align: center;
}

.dishName{
  font-size: 1.15rem;
  font-weight: bold;
}


.dishBottom{
  display: flex;
  justify-content: space-between;
}

</style>
