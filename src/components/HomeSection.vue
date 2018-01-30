<template>
  <div class="homeSection">
    <!-- detailed description -->
    <SectionCard icon="person" title="About Me">
      <p>
        Lorum Ipsum etc.
      </p>
    </SectionCard>
  </div>
</template>

<script>
import SectionCard from '@/components/SectionCard';
export default {
  name: 'HomeSection',
  components: {
    SectionCard
  }
};
</script>

<style scoped>
.homeSection {

}
</style>
