 
<template>
      <div class="container">
            <h1>Sobre</h1>
            <h2> Nosso Restaurante...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           
      </div>
      <div class="credits"><a href='https://www.freepik.com/vectors/background'>Background vector created by wangstdo - www.freepik.com</a></div>
</template>

<script>
export default {
      name:'About'
}
</script>

<style scoped>

.container {
      position: relative;
      display: flex;
      margin-top: 2rem;
      left: 15%;
      width: 80%;
      flex-direction: column;
      gap: 3rem;
}
.container *{
      text-align: center;
      padding: 0 1rem 0;
      color: var(--darkOne);
}

.container p {
      text-align: justify;
      margin: 0 6rem;
      color: var(--darkTwo);
}
</style>