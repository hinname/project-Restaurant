<template>
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
</template>

<script>
export default {
      name: 'Dish',
}
</script>

<style scoped>
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