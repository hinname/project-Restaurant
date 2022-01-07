<template>
      <div class="navBar">
            <!-- Nav Bar do App. Fixa à Esquerda-->
            <div class="bigLogo">Restaurant Logo</div>
            <div class="navBarOptions">
                  <!-- Opções da Nav Bar-->
                  <p>Home</p>
                  <p>Histórico</p>
                  <p>Cesta </p>
                  <p>Os Mais Pedidos</p>
                  <p>Promoções</p>
                  <p>Bebidas</p>
                  <p>Redes Sociais</p>
                  <p>Sobre</p>
                  <p>Configurações</p>
            </div>
            <div class="navBarUser">
                  <!-- Informações do Usuário/Mesa-->
                  <div class="userID">Mesa #X/Usuário X</div>
                  <div class="userStatus">Vazia</div>
                  <!-- Status da Mesa: Vazia, Ocupada, Indisponível.
                        Se Ocupada, Mostrar também o Status do Pedido (Aguardando pedido, Pedido em preparação...)-->
            </div>
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
</style>