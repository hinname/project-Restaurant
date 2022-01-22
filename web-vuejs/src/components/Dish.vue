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
                  <div class="toggleToChart"><button @click="CartWrite">Opção - Cesta</button></div>
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
                  const fs = require('fs');

                  let cartProducts = await require('../services/cart.json')

                  let cartProductExists = false;

                  cartProducts.map((cartProduct) => {
                        if (cartProduct.id === 1) {
                              cartProduct.quantity++;
                              cartProductExists = true;
                        }
                  });

                  if (!cartProductExists) {
                        cartProducts.push(this.prato)
                  }

                  console.log(cartProducts)
                  console.log(fs)

                  localStorage.setItem('Cart', JSON.stringify(cartProducts));
            }
      }

}
</script>

<style>

.dishes{
      display: flex;
      background: var(--lightOne);
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
