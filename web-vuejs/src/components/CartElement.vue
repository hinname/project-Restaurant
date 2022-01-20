<template>
      <div class="cartElements">
            <!-- Modelo do Card de um Prato-->
            <div class="cartName">{{name}}</div>
            <div class="cartImages">
                  <img :src="image" :alt="altImag">
            </div>
            <div class="cartIngredients">
                  <p>{{ingredients}}</p>
            </div>
            <div class="cartBottom">
                  <div class="priceTag"><p>{{price}}</p></div>
                  <div class="toggleToChart"><button @click="CartRead">Opção - Cesta</button></div>
            </div>
      </div>
</template>

<script>

export default {
      name: 'CartElement',

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
      },

      methods: {
            async CartRead() {
                  var obj = JSON.parse(localStorage.getItem('Cart'));

                  console.log(obj)
            }
      }
}
</script>

<style>
.cartElements{
      display: grid;
      background: white;
      padding: 1.5rem;
      flex-direction: column;
      height: 75%;
      width:70%;
      grid-template-columns: repeat(5, 2fr);
      margin: 2rem 0 3rem;
      align-items: center;
      text-align: center;
      gap: 1rem;

}

.cartName{
      font-size: 1.15rem;
      font-weight: bold;
}

.cartImages {
      width: 90%;
      height: auto;
}

.cartImages img {
      width: 100%;
      height: 12rem;
}


.cartBottom{
      display: flex;
      margin-top: 2rem;
      width: 100%;
      justify-content: space-between;
}
</style>
