<template>
      <div class="filtersComp">
            <div class="filterOptions">

                  <p v-if="notFoundFilters">Filtro indisponível</p>

                  <select v-else name="food-drink" id="food-drink" @change="selectDish">
                        <option v-for="filter in filters.gerais" :key="filter.id" :value="filter.name">{{filter.name}}</option>
                  </select>

                  <select v-show="foodFilter" name="comida" id="comida">
                        <option v-for="filter in filters.comida" :key="filter.id" :value="filter.name">{{filter.name}}</option>
                        
                  </select>

                  <select v-show="drinkFilter" name="bebida" id="bebida">
                        <option v-for="filter in filters.bebida" :key="filter.id" :value="filter.name">{{filter.name}}</option>
                  </select>
      
            </div>
            <div class="filterButton" v-show="!notFoundFilters && !noFilter">
                  <button>
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
            }
      },

      created() {
            api.get('filters').then(response => {
                  this.filters = response.data
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