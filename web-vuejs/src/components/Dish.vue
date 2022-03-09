<template>
      <div class="dishes">
            <!-- Modelo do Card de um Prato-->
            <div class="dishName"><p>{{name}}</p></div>
            <div class="dishImages">
                  <img :src="image" :alt="altImag">
            </div>
            <div class="dishIngredients">
                  <p>{{ingredients}}</p>
            </div>
            <div class="dishBottom">
                  <div class="priceTag"><p>{{price}}</p></div>
                  <div class="toggleToChart">
                        <button @click="CartWrite">
                              <p>Adicionar</p>
                              <fa :icon="['fas', 'shopping-cart']" />
                        </button>
                  </div>
            </div>
      </div>
</template>

<script>

export default {
      name: 'Dish',

      props: {
            id: String,
            name: String,
            image: String,
            ingredients: String,
            price: String
      },

      data(){
            return {
                  altImag: 'Foto do prato',
                  dish: {
                        id: this.id,
                        name: this.name,
                        image: this.image,
                        ingredients: this.ingredients,
                        price: this.price,
                        quantity: '1'
                  },
                  prato: {
                        id: 1,
                        name: "Pizza de Pepperoni",
                        ingredients: "Muçarela, Molho de tomate, Pepperoni.",
                        image: "http://localhost:3000/images/pepperoni.jpg",
                        price: "R$32,50",
                        quantity: 1
                  },
            }
      },

      methods: {
            async CartWrite() {
                  this.$store.dispatch('cartModule/addDishCart', this.dish)
                  alert('Item adicionado a cesta!');
            }
      }

}
</script>

<style>

.dishes{
      display: flex;
      background: var(--lightOne);
      color: var(--darkTwo);
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
      border: 1px solid var(--lightThree);

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
      max-height: 18vh;
      border-radius: 3px;
}

.dishIngredients {
      margin-top: 1rem;
}


.dishBottom{
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
}


.dishBottom button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1rem;
      gap:1rem;

      padding: 0.7vh 1.2vw;
      background: var(--buttonBgColorOne);
      color: var(--buttonFontOne);
      border-radius: 3px;
      border: 0;

      opacity: 1;
      transition: 0.3s;
      cursor:pointer;
}

.dishBottom button:hover {
      background: var(--buttonBgColorOneHover)
}

@media screen and (max-width: 1024px) {
      .dishImages img {
            max-height: 25vh;
      }
}


@media screen and (max-width: 768px) {
      .dishes{
            height: 80%;
            width: 75%;
      }

}

@media screen and (max-width: 480px){
      .dishes{
            font-size: 1.15rem;
      }

      .dishName{
            font-size: 1.4rem;
      }

      .dishBottom button {
            font-size: 1rem;
            padding: 1.2vh 2.75vw;
            gap: 0.8rem
      }

      .dishBottom button p{
            font-size: 1.25rem;
      }
}

</style>
