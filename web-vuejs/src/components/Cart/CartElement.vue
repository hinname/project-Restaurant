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
                               <fa :icon="['fas','trash']" @click="deleteItem"/>
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
            async deleteItem() {
                  this.$store.commit('deleteDishCart', this.name)

                  this.$emit('deletedItem')
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
      align-items: center;
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


@media screen and (max-width:670px) {
      .cartElements {
            flex-direction: column;
            margin: 1rem 0;
            height: auto;
      }

      .cartImages img {
            max-width: 20vw;
      }

      .cartImages {
            width: 20vw;
      }

      .cartDescription {
            width: 40vw;
      }
}

@media screen and (max-width:900px) {
      .cartImages img {
            max-width: 20vw;
      }

      .cartImages {
            width: 20vw;
      }
}
</style>
