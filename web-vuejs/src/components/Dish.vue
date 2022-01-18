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
      width: 65%;
      margin: 2rem 0 3rem;
      align-items: center;
      text-align: center;
      justify-content: space-between;
      gap: 1rem;
      border-radius: 5px;
      border: 1px solid rgb(212, 211, 207);
      
}

.dishName{
      font-size: 1.15rem;
      font-weight: bold;
}

.dishImages {
      width: 90%;
}

.dishImages img {
      width: 100%;
      
      border-radius: 5px;
}


.dishBottom{
      display: flex;
      margin-top: 2rem;
      width: 100%;
      justify-content: space-between;
}

@media screen and (max-width: 768px) {
      .dishes{
            height: 80%;
            width: 75%;
      }
}

</style>