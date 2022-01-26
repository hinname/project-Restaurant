<template>
      <div class="filterOptions">

            <select name="food-drink" id="food-drink" @change="selectDish">
                  <option value="0">Nenhum</option>
                  <option value="comida">Comida</option>
                  <option value="bebida">Bebida</option>
            </select>

            <select v-show="foodFilter" name="comida" id="comida">
                  <option value="sobremesas">Sobremesas</option>
                  <option value="carne">Carne</option>
                  <option value="frango">Frango</option>
                  <option value="veganos">Veganos</option>
                  <option value="vegetarianos">Vegetarianos</option>
                  <option value="fit">Fit</option>
                  <option value="fritos">Fritos</option>
            </select>

            <select v-show="drinkFilter" name="bebida" id="bebida">
                  <option value="sucos">Sucos</option>
                  <option value="alcoolicos">Alcoólicos</option>
            </select>
      
      </div>
</template>

<script>
export default {
      name: 'Filter',

      data() {
            return {
                  foodFilter: false,
                  drinkFilter: false
            }
      },

      methods: {
            selectDish(event) {
                  if(event.target.value == "comida") {
                        this.drinkFilter = false;
                        return this.foodFilter = true
                  }
            
                  if(event.target.value == "bebida") {
                        this.foodFilter = false;
                        return this.drinkFilter = true
                  }

                  this.foodFilter = false;
                  this.drinkFilter = false;
                  return 
            }
      }
}
</script>

<style scoped>
.filterOptions{
      display: flex;
      flex-direction: row;
      gap: 2rem;
      justify-content: left;
      flex-wrap: wrap;
      margin-left: 2rem;
}

.filterOptions select {
      padding: 0.75rem;
      background: var(--lightOne);
      border: 0;
      border-radius: 3px;
}

</style>