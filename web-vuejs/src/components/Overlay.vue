<template>
  <div class="darkCurtain"></div>
</template>

<script>
export default {
  name:'Overlay',
}
</script>

<style>
  .darkCurtain{
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 6; 
  }
</style>