<template>
  <div class="sideBarSection">
    <svgicon :icon="icon" class="section-icon" color="#ffffff"></svgicon>
    <div class="content">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: [
    'icon'
  ]
};
</script>

<style scoped>
.sideBarSection {
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 25% auto;
}

.section-icon {
  width: 2rem;
  display: block;
  margin: 4em auto 0 auto;
}
.content{
  text-align: left;
  color: white;
  font-weight: 300;
  font-size: 0.85em;
  line-height: 1.7em;
  border-top: 1px solid #4783c2;
  padding-top: 2em;
  margin: 2em 0;
}
.content p{
  margin: 0;
  padding: 0;
}
</style>
