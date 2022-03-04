<template>
      <div class="successOrderPopUp">
            <div class="container">
                  <div class="popUpBox">
                        <h3>Pedido realizado com sucesso!</h3>
                        <button @click="$emit('closePopUp')">
                              OK!
                        </button>
                  </div>
                  
            </div>
            <div class="overlay">
                  <Overlay />
            </div>
      </div>
</template>

<script>

import Overlay from "../Overlay.vue"

export default {
      name: "SuccessOrder",

      components:{
            Overlay
      },
}
</script>

<style scoped>
      .successOrderPopUp{
            display: flex;
            z-index: 8;
            height: 0;
      }

      .container {
            position: absolute;
            z-index: 8;
            top: 40%;
            width: 100%;
            display: flex;
            justify-content: center;
      }

      .popUpBox {
            padding: 2rem;
            border-radius: 3px;
            background: var(--lightOne);
            color: var(--darkOne);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
      }

      .container button {
            padding: 1rem;
            background-color: var(--buttonBgColorOne);
            color: var(--buttonFontOne);
            border:0;
            border-radius: 3px;
            cursor: pointer;
      }
</style>