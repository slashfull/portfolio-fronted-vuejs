<template>
  <div id="app">

    <menu-vue></menu-vue>

    <router-view></router-view>

    <footer-vue></footer-vue>

  </div>
</template>

<script>
  require("./assets/js/all.min.js");
  window.$ = require("./assets/js/jquery-3.3.1.min.js");
  export default {
    name: 'app',
    mounted(){
      //
    },
    update: function(){
      //
    },
    data () {
      return {
        //
      }
    }
  }
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
html{
  min-height: 100%;
  position: relative;
}
body{
  /*font-family: 'Comfortaa', cursive;*/
  /*font-family: 'Prompt', sans-serif;*/
  /* font-family: 'Alegreya Sans SC', sans-serif; */
  /* font-family: 'Roboto', sans-serif; */
  font-family: 'Source Sans Pro';
  /* font-family: 'Inria Serif', serif; */
  color: #6b6b6b;
  margin: 0px;
  padding: 0px;
  background-color: #e6e6e6;
  /*margin-bottom: 120px;*/
}


/* Clases generales */
.container{
  max-width: 1000px;
  margin: 100px auto 20px auto;
  padding: 20px 20px;
  overflow: hidden;
}
.text-bold{
  color: #001521;
}
/* Fin clases generales */

/* Responsive */
@media (max-width: 720px){
  /*body{
    margin-bottom: 100px;
  }*/

  /*footer{
    height: 100px;
  }*/
}
</style>
