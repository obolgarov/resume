<template>
  <Card class="sectionCard">
    <!-- icon -->

    <!-- title -->

    <!-- contents -->
    <slot></slot>
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
</style>
