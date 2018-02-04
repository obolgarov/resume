<template>
  <div class="resumeSection">
    <SectionCard icon="wizhat" title="Skills">
    </SectionCard>
    <SectionCard icon="work" title="Experience">
      <SectionCardSection>
        <h3>test</h3>
        <h4>test</h4>
        <p>
          test
        </p>
      </SectionCardSection>
      <SectionCardSection>
        <h3>test</h3>
        <h4>test</h4>
        <p>
          test
        </p>
      </SectionCardSection>
      <SectionCardSection>
        <h3>test</h3>
        <h4>test</h4>
        <p>
          test
        </p>
      </SectionCardSection>
    </SectionCard>
    <SectionCard icon="school" title="Education">
      <SectionCardSection>
        <h3>test</h3>
        <h4>test</h4>
        <p>
          test
        </p>
      </SectionCardSection>
      <SectionCardSection>
        <h3>test</h3>
        <h4>test</h4>
        <p>
          test
        </p>
      </SectionCardSection>
      <SectionCardSection>
        <h3>test</h3>
        <h4>test</h4>
        <p>
          test
        </p>
      </SectionCardSection>
    </SectionCard>
  </div>
</template>

<script>
import SectionCard from '@/components/SectionCard';
import SectionCardSection from '@/components/SectionCard/Section';

export default {
  name: 'ResumeSection',
  components: {
    SectionCard,
    SectionCardSection
  }
};
</script>

<style scoped>
.resumeSection {

}
</style>
