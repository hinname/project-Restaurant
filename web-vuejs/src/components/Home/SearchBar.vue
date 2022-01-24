<template>
  <div class="barContainer">
    <fa :icon="['fas', 'search']" class="icon" /> 
    <input type="text" placeholder="Buscar nome do prato ou bebida">
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scoped>
  .barContainer{
    display: flex;
    align-items: center;
    background-color: var(--lightOne);
    border-radius: 1.5rem;
  }

  .barContainer .icon {
    margin-left: 1rem;
  }

  .barContainer input {
    border: 0;
    border-radius: 1.5rem;
    width: 100%;
    height: 100%;
    padding: 0.8rem 1rem 0.8rem;
    font-size: 1rem;
  }

  .barContainer input:focus {
    outline: none;
  }
</style>