<template>
      <div class="cartElements">
            <!-- Modelo do Card de um Prato-->
                  <div class="leftSide">
                        <div class="quantity"> {{quantity}}x</div>

                         <div class="cartImages">
                              <img :src="image" :alt="altImag">
                        </div>

                        <div class="cartDescription">
                              <div class="cartName">{{name}} </div>

                              <div class="cartIngredients">
                                    <p>{{ingredients}}</p>
                              </div>
                        </div>
                  </div>

                  <div class="rightSide">
                        <div class="priceTag"><p>{{price}}</p></div>
                       
                         <div class="toggleToChart">
                               <fa :icon="['fas','trash']"/>
                         </div>      
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
            price: String,
            quantity: String
      },

      data(){
            return {
                  altImag: 'Foto do prato',
            }
      },

      methods: {
            async CartDelete() {
                  //puxando o elemento Cart
                  var cartProducts = JSON.parse(localStorage.getItem('Cart'));
                  cartProducts.map((cartProduct) => {
                    //id = 1 por puxar um unico elemento, a pizza
                    if (cartProduct.id === 1 && cartProduct.quantity > 1) {
                    cartProduct.quantity--;
                    //removendo o elemento caso a quantidade seja 1
                    } else if (cartProduct.id === 1 && cartProduct.quantity === 1) {
                    const cartIndexToRemove = cartProducts.findIndex(cartProduct => cartProduct.id === 1);
                    cartProducts.splice(cartIndexToRemove, 1);
                    }
                  });
                  //guardando a informação no elemento Cart
                  localStorage.setItem('Cart', JSON.stringify(cartProducts));

                  console.log(cartProducts)
            }
      }
}
</script>

<style>
.cartElements{
      display: flex;
      flex-direction: row;
      padding: 1.5rem;
      background-color: var(--lightOne);
      height: 75%;
      width: 90%; 
      justify-content: space-between;
      align-items:center;
      text-align: center;
      gap: 3rem;
      border-radius: 6px;
}

.leftSide, .rightSide{
      display: flex;
      flex-direction: row;
}

.leftSide{
      gap: 2.5rem;
}

.quantity{
      font-weight: 900;
      align-self: center;
}

.cartImages {
      height: auto;
      width: 10rem;
}

.cartImages img {
      width: 100%;
      border-radius: 4px;
}

.cartDescription{
      display: flex;
      flex-direction: column;
      text-align: left;
      max-width: 50%;
      gap:0.5rem;
      padding-top: 0.5rem ;
}

.cartName{
      font-size: 1.15rem;
      font-weight: bold;
}

.rightSide{
      gap:3rem;
      height: 100%;
}

.priceTag{
      display: flex;
      align-self:center;
}


.toggleToChart{
      color:var(--buttonBgColorTwo);
      cursor: pointer;
      align-self: center;
}

.toggleToChart:hover{
      color:var(--buttonBgColorTwoHover);
}

@media screen and (max-width:480px){
      
}
</style>
