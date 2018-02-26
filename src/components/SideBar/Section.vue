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
  width: 1.8rem;
  display: block;
  margin: 2em auto 0 auto;
}
.content{
  text-align: left;
  color: white;
  font-weight: 300;
  font-size: 0.85em;
  line-height: 1.7em;
  display: flex;
  border-bottom: 1px solid #4783c2;
  justify-content: center;
  flex-direction: column;
  padding: 2em 2em 2em 0;
}
.sideBarSection:last-child .content {
  border: none;
}

p{
  margin: 0;
  padding: 0;
}
h3 {
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  font-weight: 400;
}
h4 {
  margin: 0;
  padding: 0;
  font-size: 1.1em;
  font-weight: 300;
  opacity: 0.7;
}
</style>
