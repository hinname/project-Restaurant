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
                  <div class="quantity"><p>Quantidade:<br>{{quantity}}</p></div>
                  <div class="toggleToChart"><button @click="CartDelete">Deletar item</button></div>
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
      display: grid;
      background: white;
      padding: 1.5rem;
      flex-direction: column;
      height: 75%;
      width:90%;
      grid-template-columns: repeat(6, 2fr);
      margin: 2rem 0 3rem;
      align-items: center;
      text-align: center;
      gap: 3rem;

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
