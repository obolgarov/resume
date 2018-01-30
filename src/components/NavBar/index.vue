<template>
  <div class="navBar">
    <div class="navBarList">
      <NavBarItem v-for="(section, index) in sections" :key="index"
      class="navBarItem"
      :path="section.path">
        {{section.name}}
      </NavBarItem>
    </div>
  </div>
</template>

<script>
import NavBarItem from './Item';
export default {
  name: 'NavBar',
  components: {
    NavBarItem
  },
  data () {
    return {
      sections: [
        {
          name: 'home',
          path: 'HomeSection'
        }
      ]
    };
  }
};
</script>

<style scoped>
.navBar {
  width: 100%;
  position: fixed;
  top: 0;
  height: auto;
  background-color: #2196f3;
  display: block;
}

.navBarList {
  margin: 0 auto;
  width: 70%;
  display: flex;
  align-items: flex-start;
}

.navBarItem {
  height: 4em;
}
</style>
