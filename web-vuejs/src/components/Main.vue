<template>
  <div class="bigContainer">
    <!-- Container Geral de Todo Conteúdo-->
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
        <p>História do Restaurante</p>
        <p>Redes Sociais</p>
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
    
    <div class="mainContent">
    <!--Todo Conteúdo que estará à Direita do App (ou seja, ao lado da Nav Bar) -->
      <div class="header"> 
      <!-- Cabeçalho do App -->
        <div class="searchBar">Search</div> 
        <div class="user">
          <div class="notificationBell"> Sino</div> 
          <div class="userIcon">Ícone do Usuário/Mesa</div>
        </div>
      </div>
      
      <div class="filters">
      <!-- Filtragem dos Pratos do Restaurante que aparecerão no Menu logo abaixo-->
        <div class="filterTitle">
          <h3>Filtros</h3> 
        </div> 
        <div class="filterOptions">
          <p>Sobremesas</p>
          <p>Carne</p>
          <p>Frango</p>
          <p>Veganos</p>
          <p>Vegetarianos</p>
          <p>Fit</p>
          <p>Fritos</p>
          <p>Sucos</p>
          <p>Alcoólicos</p>
        </div>
      </div>

      <div class="menu">
      <!-- O Cardápio com as Opções-->
          <div class="dishes">
          <!-- Modelo do Card de um Prato-->
          <div class="dishName">Pizza de Pepperoni</div>
          <div class="dishImages">
            <p>Imagens do Prato</p>
          </div>
          <div class="dishIngredients">
            <p>Ingredientes (Resumo do Prato)</p>
          </div>
          <div class="menuBottom">
            <div class="priceTag"><p>Preço</p></div>
            <div class="toggleToChart"><p>Opção de Botar na Cesta</p></div>
          </div>

         <div class="dishes">
          <div class="dishName">Brownie</div>
          <div class="dishImages">
            <p>Imagens do Prato</p>
          </div>
          <div class="dishIngredients">
            <p>Ingredientes (Resumo do Prato)</p>
          </div>
          <div class="menuBottom">
            <div class="priceTag"><p>Preço</p></div>
            <div class="toggleToChart"><p>Opção de Botar na Cesta</p></div>
          </div>

           <div class="dishes">
          <div class="dishName">Strogonoff de Carne</div>
          <div class="dishImages">
            <p>Imagens do Prato</p>
          </div>
          <div class="dishIngredients">
            <p>Ingredientes (Resumo do Prato)</p>
          </div>
          <div class="menuBottom">
            <div class="priceTag"><p>Preço</p></div>
            <div class="toggleToChart"><p>Opção de Botar na Cesta</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
