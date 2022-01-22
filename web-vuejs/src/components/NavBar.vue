<template>
      <div class="navBar">
            <!-- Nav Bar do App. Fixa à Esquerda-->
            <div class="bigLogo">
                  <img :src="require(`../assets/${image}`)" alt="foto">
            </div>
            <div class="navBarOptions">
                  <!-- Opções da Nav Bar-->
                  <ul>
                        <li>
                              <RouterLink to="/" exact>Home</RouterLink>
                        </li>
                        <li>Meus pedidos</li>
                        <li>
                              <RouterLink to="/cart">Cesta</RouterLink>
                        </li>
                        <li>Os mais pedidos</li>
                        <li>Promoções</li>
                        <li>Bebidas</li>
                        <li>
                              <RouterLink to="/about">Sobre</RouterLink>
                        </li>
                        <li>
                              <RouterLink to="/settings">Configurações</RouterLink>
                        </li>
                  </ul>

            </div>
            <div class="navBarUser">
                  <!-- Informações do Usuário/Mesa-->
                  <div class="ids">
                        <div class="userID"><p>User #X</p></div>
                        <div class="tableID"><p>Mesa #Y</p></div>
                  </div>

                  <div class="userStatus"><p>Vazia</p></div>
                  <!-- Status da Mesa: Vazia, Ocupada, Indisponível.
                        Se Ocupada, Mostrar também o Status do Pedido (Aguardando pedido, Pedido em preparação...)-->
            </div>
            <div class="socialMediaLinks">
                  <a href="https://www.facebook.com"><fa :icon="['fab', 'facebook']" /></a>
                  <a href="https://www.instagram.com"><fa :icon="['fab', 'instagram']" /></a>
            </div>
      </div>
      <div class="popUpContainer">
            <MostReq/>
      </div>
</template>

<script>
import MostReq from "../views/MostReq.vue"

export default {
      name: 'NavBar',
      
      components: {
            MostReq
      },

      data() {
            return {
                  image: 'Restaurant-logo_light.jpg'
            }
      }
}
</script>

<style scoped>

.navBar{
      background-color: var(--backgroundColor);
      position: fixed;
      display: flex;
      flex-direction: column;
      width: 15%;
      height: 100vh;
      left:0;
      text-align: center;
      justify-content: space-between;
      z-index: 10;
}

.bigLogo{
      width: 100%;
      height: 18%;
}

.bigLogo img {
      width: 100%;
}

.navBarOptions ul{
      display: flex;
      flex-direction: column;
      gap:1rem;
}

.navBarOptions .router-link-active {
      color: rgb(192, 65, 65)
}

.navBarOptions a {
      text-decoration: none;
}

.navBarUser{
      display: flex;
      flex-direction: column;
      gap:0.8rem;
}

.ids{
      display: flex;
      flex-direction: column;
      gap:0.4rem;
}

.socialMediaLinks{
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      font-size: 1.75rem;

}

.socialMediaLinks a {
      margin: 0 0.5rem;
      text-decoration: none;
      color: var(--DarkOne);
}

.popUpContainer{
      display: none;
}

</style>
