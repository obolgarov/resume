<template>
  <div :class="{
    navBarItem: true,
    selected: selected,
    hovered: hovered
  }"
  @mouseover="hovered = true"
  @mouseleave="hovered = false">
    <router-link class="link" :to="{name: path}">
      <slot>
      </slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBarItem',
  props: [
    'path',
    'selected'
  ],
  data () {
    return {
      hovered: false
    };
  }
};
</script>

<style scoped>
.navBarItem .link {
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  opacity: 0.7;
  text-transform: uppercase;
  height: 100%;
  width: auto;
  text-decoration: none;
}

.navBarItem.selected .link {
  opacity: 1;
}

.navBarItem.hovered .link {
  opacity: 1;
}

</style>
