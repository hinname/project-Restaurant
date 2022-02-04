<template>
     <div class="container">
     <h1>Configurações do app</h1>
      <div class="options">
            <div class="darkModeOption"> 
                  <h3> Modo Dark</h3> 
                  <Switch class="darkModeSwitch" @switch="toggleDarkMode"/>
            </div>
            <h3>Temas</h3>
            <h3> Idiomas</h3>
            <h3> Suporte</h3>
            </div>
     </div>
</template>

<script>
import Switch from "../components/Switch.vue"

export default {
  components: { Switch },
  
  name: 'Settings',
  
  methods:{
      toggleDarkMode(switchState){
           switchState = !switchState
           let main = document.querySelector('.main')
           if (switchState){
                  main.classList.remove('light')
                  main.classList.add('dark')
            } else {
                  main.classList.remove('dark')
                  main.classList.add('light')
            }
      }
  },

}
</script>

<style scoped>
.light {
     --backgroundColor: #a1ce46;
     --darOne: #312f3a;
     --darkTwo: #45424b;
     --lightOne: rgb(255, 255, 255);
     --lightTwo: #ccc;
   }

   .dark {
     --backgroundColor: #171c25;
     --darOne: #f3f3f3;
     --darkTwo: #fff;
     --lightOne: #555558;
     --lightTwo: #919191;
   }

      .container{
            position: relative;
            width: 85%;
            left: 15%;
            padding: 1rem 2rem 0;
             
      }

      .options{
            display: flex;
            flex-direction: column;
            gap: 5rem; 
            margin: 4rem 2.5rem 0;
      }

      .darkModeOption{
            display: flex;
            flex-direction: row;
            gap: 3rem;
            align-items: center;
            padding: 0 !important;
      }    

      h3{
            text-align: left !important;
      }
      
</style>