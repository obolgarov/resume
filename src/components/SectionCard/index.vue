<template>
  <Card class="sectionCard">
    <svgicon :icon="icon" class="icon" color="#767270"></svgicon>

    <div class="content">
      <h1 class="title">{{title}}</h1>

      <slot></slot>
    </div>

  </Card>
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'SectionCard',
  props: [
    'icon',
    'title'
  ],
  components: {
    Card
  },
  data () {
    return {
    };
  }
};
</script>

<style scoped>
.card.sectionCard {
  display: grid;
  grid-template-columns: 20% auto;
  padding: 2em 0 2em 0;
}

.icon {
  width: 3em;
  display: block;
  margin: 0 auto;
}

.content {
  text-align: left;
  margin-top: 0.5em;
}

h1{
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 22pt;
}

/* styling optional "section" component */
.section {
  background-color: blue;
}
</style>
