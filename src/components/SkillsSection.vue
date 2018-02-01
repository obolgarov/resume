<template>
  <div class="skillsSection">
    <!-- detailed description -->
    <SectionCard icon="person" title="About Me">
      <p>
        Skills Lorum Ipsum etc.
      </p>
    </SectionCard>
  </div>
</template>

<script>
import SectionCard from '@/components/SectionCard';
export default {
  name: 'SkillsSection',
  components: {
    SectionCard
  }
};
</script>

<style scoped>
.skillsSection {

}
</style>
