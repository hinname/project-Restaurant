<template>
  <div class="toggleSwitcher" >
    <label class="switch">
      <input type="checkbox" v-model="checked" id="checkbox" @click="$emit('switch')">
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default{
      name: 'Switch',
      emits: ['switch'],

      props: {
            state: Boolean
      },

      data() {
            return {
                  checked: false
            }
      },

      created() {
            if(this.state) {
                  this.checked = true
                  return
            }

            this.checked = false;
      }

}
  
</script>


<style>
.switch{
            position: relative;
            display: inline-block;
            width: 40px;
            height: 24px;
      }

      .switch input{
            opacity: 0;
            width: 0;
            height: 0;
      }

      .slider{
            position: absolute;
            cursor: pointer;
            top: 0;
            left:0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: 0.4s;-webkit-transition: 0.4s;
      }

      .slider:before{
            position: absolute;
            content:"";
            height: 16px;
            width:16px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: 0.4s;
            -webkit-transition: 0.4s;
      }

      input:checked + .slider {
            background-color:  #2196F3 ;
      }

      input:focus + .slide {
            box-shadow: 0 0 1px #2196f3;
      }

      input:checked + .slider:before{
            transform: translateX(16px);
            -webkit-transform: translateX(16px);
            -ms-transform: translateX(16px);
      }

      .slider.round {
            border-radius: 34px;
      }

      .slider.round:before {
            border-radius: 50%;
      }

   
</style>