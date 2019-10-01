<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {
    methods: {
      animateClick(callback) {
        callback.call(this);
      }
    }
  }
</script>
<style>
  @import 'assets/base.css';
  @import "assets/components.css";
  @import "~font-awesome/css/font-awesome.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f7f7f7;
  text-align: center;
  color: #2c3e50;
}
</style>
