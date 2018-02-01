<template>
  <div class="navBar">
    <div class="navBarFixedContainer">
      <div class="navBarList">
        <NavBarItem v-for="(section, index) in sections" :key="index"
        class="navBarItem"
        :path="section.path"
        :selected="getSelected(section.path)">
          {{section.title}}
        </NavBarItem>
      </div>
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
          title: 'home',
          path: 'HomeSection'
        },
        {
          title: 'skills',
          path: 'SkillsSection'
        }
      ]
    };
  },
  methods: {
    getSelected (routeName) {
      console.log('matching');
      return routeName === this.$route.name;
    }
  }
};
</script>

<style scoped>
.navBar {
  display: block;
  height: 4em;
  width: 100%;
}

.navBarFixedContainer {
  top: 0;
  width: 100%;
  position: fixed;
  display: block;
  background-color: #2196f3;
  height: auto;
  z-index: 99;
  height: 4em;
}

.navBarList {
  margin: 0 auto;
  width: 70%;
  max-width: 80em;
  display: flex;
  align-items: flex-start;
  height: 100%;
}

.navBarItem {
  height: 100%;
}
</style>
