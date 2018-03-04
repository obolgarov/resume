<template>
  <div class="contactSection">
    <SectionCard icon="send" title="Contact">
      <FormComponent @submit="onSubmit">
        <FormInput type="text" label="Name" :model="name" @update="(newVal) => {name = newVal}"></FormInput>
        <FormInput type="text" label="Email" :model="email" @update="(newVal) => {email = newVal}"></FormInput>
        <FormInput type="textarea" label="Message" :model="message" @update="(newVal) => {message = newVal}"></FormInput>
      </FormComponent>
    </SectionCard>
  </div>
</template>

<script>
import SectionCard from '@/components/SectionCard';
// import SectionCardSection from '@/components/SectionCard/Section';
import FormComponent from '@/components/FormComponent';
import FormInput from '@/components/FormComponent/FormInput';
import config from '@/config.js';
import axios from 'axios';

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
  mounted () {
  },
  methods: {
    onSubmit (recaptchaChallenge) {
      axios.post(config.apiUrl + '/email', {
        name: this.name,
        email: this.email,
        message: this.message,
        recaptchaChallenge: recaptchaChallenge
      }).then((result) => {
      }).catch((error) => {
        console.log('message error');
        console.log(error);
      });
    }
  }
};
</script>

<style scoped>
.contactSection {

}
</style>
