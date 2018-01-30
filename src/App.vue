<template>
  <div id="app">

    <NavBar></NavBar>

    <!-- sidebar: personal picture, simple description, email/phone -->

    <!-- section view -->
    <router-view/>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: #e3e3e3;
}
</style>
