<template>
  <div class="barContainer">
    
    <div class="search-input">
      <input type="text" v-model="searchValue" placeholder="Buscar nome do prato ou bebida">
    </div>
    <div class="search" @click="$emit('search', searchValue)">
        <fa :icon="['fas', 'search']" class="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  emits:['search'],

  data(){
    return {
      searchValue:""
    }
  }
}
</script>

<style scoped>
  .barContainer{
    display: flex;
    align-items: center;
    background-color: var(--lightOne);
    border-radius: 1.5rem;
  }

  .search .icon {
    margin-right: 1rem;
    padding: 0.5rem;
    padding-right: 0;
    cursor: pointer;
  }

  .search-input {
    width: 100%;
    height: 100%;
    border: 0;
  }

  .search-input input {
    border-radius: 1.5rem;
    width: 100%;
    height: 100%;
    border: 0;
    padding: 0.8rem 1rem 0.8rem;
    font-size: 1rem;
  }

  .barContainer input:focus {
    outline: none;
  }
</style>