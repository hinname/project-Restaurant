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

                  
                  this.$store.commit('cartModule/deleteDishCart', this.name)

                  this.$emit('removedItem')
            }
      }
}
</script>

<style>
.cartElements{
      display: flex;
      flex-direction: row;
      padding: 1.5rem;
      background-color: var(--lightFive);
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

.cartImages {
      width: 10rem;
      height: auto;
}

.cartImages img {
      width: 100%;
      height: 100%;
      object-fit: contain;
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
            margin: 0 0 2rem;
            height: auto;
      }

      .cartImages img {
            width: 20vw;
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
            width: 20vw;
      }

      .cartImages {
            width: 20vw;
      }
}
</style>
