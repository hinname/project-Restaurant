<template>
      <div class="dishes">
            <!-- Modelo do Card de um Prato-->
            <div class="dishName">{{name}}</div>
            <div class="dishImages">
                  <img :src="image" :alt="altImag">
            </div>
            <div class="dishIngredients">
                  <p>{{ingredients}}</p>
            </div>
            <div class="dishBottom">
                  <div class="priceTag"><p>{{price}}</p></div>
                  <div class="toggleToChart"><p>Opção - Cesta</p></div>
            </div>
      </div>
</template>

<script>

export default {
      name: 'Dish',

      data(){
            return {
                  name: 'Pizza de Pepperoni',
                  image: 'http://localhost:3000/images/pepperoni.jpg',
                  altImag: 'Pizza de Pepperoni',
                  ingredients: 'Muçarela, Molho de tomate, Pepperoni.',
                  price: 'R$32,50'
            }
      }
}
</script>

<style>
.dishes{
      display: flex;
      height: 80%;
      width:70%;
      margin: 1.5rem 0 1rem;
      justify-content: space-between;
      align-items: center;
      text-align: center;
}

.dishName{
      font-size: 1.15rem;
      font-weight: bold;
}

.dishImages {
      width: 90%;
      height: 100%;
}

.dishImages img {
      width: 100%;
}


.dishBottom{
      display: flex;
      margin-top: 2rem;
      width: 100%;
      justify-content: space-between;
}
</style>