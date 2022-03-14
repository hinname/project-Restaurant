<template>
      <div class="orderElement">
            <div class="orderDish" v-for="orderDish in $store.state.orderModule.order[id-1].dishes" :key="orderDish.id">
                  <!-- Modelo do Card de um Prato-->
                        <div class="leftSide">
                              <div class="quantity"> {{orderDish.quantity}}x</div>

                              <div class="orderImages">
                                    <img :src="orderDish.image" :alt="altImag">
                              </div>

                              <div class="orderDescription">
                                    <div class="orderName">{{orderDish.name}} </div>

                                    <div class="orderIngredients">
                                          <p>{{orderDish.ingredients}}</p>
                                    </div>
                              </div>
                        </div>

                        <div class="rightSide">
                              <div class="priceTag"><p>{{orderDish.price}}</p></div>
                        </div>
            </div>
            <div class="bottomOrder">
                  <div class="totalPrice">
                        <p id="priceText">Valor total do pedido:</p>
                        <p id="priceOrder">{{priceOrder}}</p>
                  </div>
            </div>
      </div>
</template>


<script>
export default {
      name: 'OrderElement',

      props: {
            id: Number,
            priceOrder: Number,
      },

      data(){
            return {
                  altImag: 'Foto do prato',
            }
      },

      created() {

      }

}
</script>


<style scoped>
.orderElement {
      display: flex;
      flex-direction: column;
      background-color: var(--lightOne);
      width: 90%;
      margin: 3rem 0;
      border-radius: 6px;
}

.orderDish{
      display: flex;
      flex-direction: row;
      padding: 1.5rem;
      background-color: var(--buttonFontOne);
      height: 75%;
      width: auto;
      justify-content: space-between;
      align-items:center;
      text-align: center;
      gap: 3rem;
      border-radius: 6px;
}

.leftSide, .rightSide{
      display: flex;
      flex-direction: row;
      align-items: center;
}

.leftSide{
      gap: 2.5rem;
}

.quantity{
      font-weight: 900;
      align-self: center;
}

.orderImages {
      height: auto;
      width: 10rem;
}

.orderImages img {
      width: 100%;
      border-radius: 4px;
}

.orderDescription{
      display: flex;
      flex-direction: column;
      text-align: left;
      max-width: 50%;
      gap:0.5rem;
      padding-top: 0.5rem ;
}

.orderName{
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

.bottomOrder {
      display: flex;
      justify-content: right;
      align-items: center;
      width: auto;
      padding: 1.5rem
}

.totalPrice {
      display: flex;
      gap: 1rem;
      align-items: center;
}

#priceText {
      color: var(--darkOne);
}

#priceOrder {
      font-size: 1.2rem;
      color: var(--buttonBgColorTwo);
}


@media screen and (max-width:480px){
      
}


@media screen and (max-width:670px) {
      .orderElement {
            height: auto;
            width: 100%;
      }
      .orderDish {
            flex-direction: column;
            margin: 0 0 2rem;
            height: auto;
      }

      .orderImages img {
            width: 20vw;
      }

      .orderImages {
            width: 20vw;
      }

      .orderDescription {
            width: 40vw;
      }


      .bottomOrder {
            justify-content: center;
      }
}

@media screen and (max-width:900px) {
      .orderImages img {
            width: 20vw;
      }

      .orderImages {
            width: 20vw;
      }
}

</style>