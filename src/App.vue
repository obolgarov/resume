<template>
  <div id="app">

    <NavBar></NavBar>

    <div id="mainContainer">
      <!-- sidebar: personal picture, simple description, email/phone -->
      <SideBar id="theSidebar"></SideBar>

      <!-- section view -->
      <router-view id="theSectionView"/>
    </div>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
export default {
  name: 'App',
  components: {
    NavBar,
    SideBar
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
  height: auto;
  padding-bottom: 5em;
  color: #767270;
}

#mainContainer {
  width: 70%;
  max-width: 80em;
  margin: 0 auto;

  /* playing with this new grid thing */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* adding 'the' to disclose there is only one of these. Also, because they're
   ids. Needed because this component can't scope its styles.
   TODO: contain these in a component so I can scope styles */
#theSidebar {
  grid-column: 1 / span 1;
}
#theSectionView{
  grid-column: 2 / span 2;
}
</style>
