<template>
     <div class="container">
     <h1>Configurações </h1>
      <div class="options">
            <div class="darkModeOption"> 
                  <h3> Modo Dark</h3> 
                  <Switch class="darkModeSwitch" :state="$store.state.dark" @switch="toggleDarkMode"/>
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
      toggleDarkMode(){
           //let main = document.querySelector('.main')
           //if (switchState){
                  //main.classList.remove('light')
                  //main.classList.add('dark')
            //} else {
                  //main.classList.remove('dark')
                  //main.classList.add('light')
            //}

            this.$store.commit('changeDarkMode')
      }
  },

}
</script>

<style scoped>

      .container{
            position: relative;
            width: 85%;
            left: 15%;
            padding: 1rem 2rem 0;
             
      }

      .container h1{
            margin-top: 1rem;
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
            color: var(--darkTwo);
      }

      h1{
            color: var(--darkOne);
      }

      @media screen and (max-width: 870px){
      }

      @media screen and (max-width: 480px) {
            .container{
                  left: 0;
                  width: 100%;
            }

            h3{
                  font-size: 1.5rem;
            }

            .darkModeSwitch{
                  height: 1.5rem;
            }
      }

      @media screen and (max-width: 360px) {
            h3{
                  font-size: 1.3rem;
            }
      }
</style>