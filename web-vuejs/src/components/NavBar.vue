<template>
      <div class="navBar">
            <!-- Nav Bar do App. Fixa à Esquerda-->
            <div class="bigLogo">Restaurant Logo</div>
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
                  <div class="userID">Mesa #X/Usuário X</div>
                  <div class="userStatus">Vazia</div>
                  <!-- Status da Mesa: Vazia, Ocupada, Indisponível.
                        Se Ocupada, Mostrar também o Status do Pedido (Aguardando pedido, Pedido em preparação...)-->
            </div>
            <div class="socialMediaLinks"><p>Redes Sociais</p></div>
      </div>
</template>




<script>
export default {
      name: 'NavBar'
}
</script>

<style scoped>
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
      z-index: 10;
}

.bigLogo{
      margin-top:1rem;
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
      color: #000;
}



.navBarUser{
      display: flex;
      flex-direction: column;
      gap:0.5rem;
}

.socialMediaLinks{
      margin-bottom: 1rem;
}
</style>
