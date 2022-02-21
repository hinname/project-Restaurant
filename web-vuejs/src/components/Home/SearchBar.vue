<template>
  <div class="barContainer">
    
    <div class="search-input">
      <input type="text" v-model="searchValue" placeholder="Buscar nome do prato">
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

  /*
  border: 1px solid var(--darkOne);

  color: var(--darkOne);

  background: var(--lightOne);
    color: var(--darkOne);
   */
}
</script>

<style scoped>
  .barContainer{
    display: flex;
    align-items: center;
    border-radius: 1.5rem;

  }

  .search .icon {
    padding: 0.5rem;
    padding-right: 0;
    cursor: pointer;
    color: var(--darkOne);
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
    background: var(--lightFour);
    color: var(--darkOne);
  }

  .barContainer input:focus {
    outline: none;
  }
</style>