<template>
  <div class="portfolioSection">

  </div>
</template>

<script>
// TODO

import SectionCard from '@/components/SectionCard';
export default {
  name: 'PortfolioSection',
  components: {
    SectionCard
  },
  data () {
    return {
      projects: [
        {
          name: '',
          blurb: '',
          smallImage: '',
          largeImage: '',
          details: '',
          date: '',
          client: ''
        }
      ]
    };
  }
};
</script>

<style scoped>
.portfolioSection {

}
</style>
