<template>
      <div class="filtersComp">
            <div class="filterOptions">

                  <p v-if="notFoundFilters">Filtro indisponível</p>

                  <select v-else v-model="mainFilterValue" name="food-drink" id="food-drink" @change="selectDish">
                        <option v-for="filter in filters.gerais" :key="filter.id" :value="filter.name">{{filter.name}}</option>
                  </select>

                  <select v-show="foodFilter" v-model="foodFilterValue" name="comida" id="comida">
                        <option value="0">-------</option>
                        <option v-for="filter in filters.comida" :key="filter.id" :value="filter.name">{{filter.name}}</option>
                        
                  </select>

                  <select v-show="drinkFilter" v-model="drinkFilterValue" name="bebida" id="bebida">
                        <option value="0">-------</option>
                        <option v-for="filter in filters.bebida" :key="filter.id" :value="filter.name">{{filter.name}}</option>
                  </select>
      
            </div>
            <div class="filterButton" v-show="!notFoundFilters && !noFilter">
                  <button @click="emitFilter">
                        Aplicar 
                  </button>
            </div>
      </div>
      
</template>

<script>

import api from "../../services/api"

export default {
      name: 'Filter',

      data() {
            return {
                  filters: {},

                  foodFilter: false,
                  drinkFilter: false,
                  notFoundFilters: false,
                  noFilter: true,


                  mainFilterValue: "",
                  foodFilterValue: "0",
                  drinkFilterValue: "0"
            }
      },

      created() {
            api.get('filters').then(response => {
                  this.filters = response.data

                  this.mainFilterValue = this.filters.gerais[0].name;
                  //this.foodFilterValue = this.filters.comida[0].name;
                  //this.drinkFilterValue = this.filters.bebida[0].name;
            })
            .catch(err => {
                  console.log(err)
                  this.notFoundFilters = true
            })
      },

      methods: {
            selectDish(event) {
                  if(event.target.value == "Comidas") {
                        this.drinkFilter = false;
                        this.noFilter = false;
                        return this.foodFilter = true
                  }
            
                  if(event.target.value == "Bebidas") {
                        this.foodFilter = false;
                        this.noFilter = false;
                        return this.drinkFilter = true
                  }

                  this.foodFilter = false;
                  this.drinkFilter = false;
                  this.noFilter = true;
                  return 
            },

            emitFilter() {

                  if(this.foodFilter) {
                        return this.$emit('filter',
                        {
                              mainFilterValue : this.mainFilterValue, 
                              subFilterValue: this.foodFilterValue
                        });
                  }

                  if(this.drinkFilter) {
                        return this.$emit('filter', 
                        {
                              mainFilterValue : this.mainFilterValue, 
                              subFilterValue: this.drinkFilterValue
                        });
                  }
            }
      }
}
</script>

<style scoped>

.filtersComp {
      display: flex;
      gap: 4rem;
}

.filterOptions{
      display: flex;
      flex-direction: row;
      gap: 2rem;
      justify-content: left;
      flex-wrap: wrap;
      margin-left: 2rem;
}

.filterOptions select {
      padding: 0.8vw;
      background: var(--lightOne);
      border: 0;
      border-radius: 3px;
      
}

.filterButton {
      display: flex;
      align-content: center;
}

.filterButton button {
      padding: 0.7vw 1.2vw;
      background: #A1CE46;
      color: rgba(255, 255, 255, 0.925);
      border-radius: 3px;
      border: 0;

      opacity: 1;
      transition: 0.3s;
      cursor:pointer;
}

.filterButton button:hover {
      background: #99be4e;
}

</style>