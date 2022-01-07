<template>
  <div class="bigContainer">
    <!-- Container Geral de Todo Conteúdo-->
    <div class="mainContainer">
     <!--Todo Conteúdo que estará à Direita do App (ou seja, ao lado da Nav Bar)-->
      <div class="header"> 
      <!-- Cabeçalho do App-->
        <div class="searchBar">Search</div> 
        <div class="user">
          <div class="notificationBell">Sino</div> 
          <div class="userIcon">Ícone do User</div>
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
            <div class="dishBottom">
              <div class="priceTag"><p>Preço</p></div>
              <div class="toggleToChart"><p>Opção - Cesta</p></div>
            </div>
          </div>

         <div class="dishes">
          <div class="dishName">Brownie</div>
          <div class="dishImages">
            <p>Imagens do Prato</p>
          </div>
          <div class="dishIngredients">
            <p>Ingredientes (Resumo do Prato)</p>
          </div>
          <div class="dishBottom">
            <div class="priceTag"><p>Preço</p></div>
            <div class="toggleToChart"><p>Opção - Cesta</p></div>
          </div>
         </div>

        <div class="dishes">
          <div class="dishName">Strogonoff de Carne</div>
          <div class="dishImages">
            <p>Imagens do Prato</p>
          </div>
          <div class="dishIngredients">
            <p>Ingredientes (Resumo do Prato)</p>
          </div>
          <div class="dishBottom">
            <div class="priceTag"><p>Preço</p></div>
            <div class="toggleToChart"><p>Opção - Cesta</p></div>
          </div>
        </div>

        <div class="dishes">
          <!-- Modelo do Card de um Prato-->
            <div class="dishName">Bife à Parmegiana com Fritas</div>
            <div class="dishImages">
              <p>Imagens do Prato</p>
            </div>
            <div class="dishIngredients">
              <p>Ingredientes (Resumo do Prato)</p>
            </div>
            <div class="dishBottom">
              <div class="priceTag"><p>Preço</p></div>
              <div class="toggleToChart"><p>Opção - Cesta</p></div>
            </div>
          </div>

          <div class="dishes">
          <!-- Modelo do Card de um Prato-->
            <div class="dishName">Salada de Frutas</div>
            <div class="dishImages">
              <p>Imagens do Prato</p>
            </div>
            <div class="dishIngredients">
              <p>Ingredientes (Resumo do Prato)</p>
            </div>
            <div class="dishBottom">
              <div class="priceTag"><p>Preço</p></div>
              <div class="toggleToChart"><p>Opção - Cesta</p></div>
            </div>
          </div>

          <div class="dishes">
          <!-- Modelo do Card de um Prato-->
            <div class="dishName">Caipivodka</div>
            <div class="dishImages">
              <p>Imagens do Prato</p>
            </div>
            <div class="dishIngredients">
              <p>Ingredientes (Resumo do Prato)</p>
            </div>
            <div class="dishBottom">
              <div class="priceTag"><p>Preço</p></div>
              <div class="toggleToChart"><p>Opção - Cesta</p></div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

