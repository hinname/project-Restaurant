<template>
     <div class="container">
            <h1>Configurações do app</h1>
            <div class="options">
                  <div class="darkModeOption"> 
                        <h3> Modo Dark</h3> 
                        <Switch class="darkModeSwitch"/>
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
      name: 'Settings'
}
</script>

<style>
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
            color: rgb(29, 28, 28);
            text-align: left !important;
      }
</style>