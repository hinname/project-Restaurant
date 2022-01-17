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

      props: {
            name: String,
            image: String,
            ingredients: String,
            price: String
      },

      data(){
            return {
                  altImag: 'Foto do prato',
            }
      }
}
</script>

<style>
.dishes{
      display: flex;
      background: white;
      padding: 1.5rem;
      flex-direction: column;
      height: 75%;
      width:70%;
      margin: 2rem 0 3rem;
      align-items: center;
      text-align: center;
      gap: 1rem;
      
}

.dishName{
      font-size: 1.15rem;
      font-weight: bold;
}

.dishImages {
      width: 90%;
      height: auto;
}

.dishImages img {
      width: 100%;
      height: 12rem;
}


.dishBottom{
      display: flex;
      margin-top: 2rem;
      width: 100%;
      justify-content: space-between;
}
</style>