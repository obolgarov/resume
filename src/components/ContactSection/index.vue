<template>
  <div class="contactSection">
    <SectionCard icon="send" title="Contact">
      <FormComponent @submit="onSubmit">
        <FormInput type="text" label="Name" :model="name"></FormInput>
        <FormInput type="text" label="Email" :model="email"></FormInput>
        <FormInput type="textarea" label="Message" :model="message"></FormInput>
      </FormComponent>
    </SectionCard>
  </div>
</template>

<script>
import SectionCard from '@/components/SectionCard';
// import SectionCardSection from '@/components/SectionCard/Section';
import FormComponent from '@/components/FormComponent';
import FormInput from '@/components/FormComponent/FormInput';

export default {
  name: 'ContactSection',
  components: {
    SectionCard,
    FormComponent,
    FormInput
  },
  data () {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    onSubmit () {
      console.log();
    }
  }
};
</script>

<style scoped>
.contactSection {

}
</style>
