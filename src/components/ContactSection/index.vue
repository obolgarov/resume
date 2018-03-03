<template>
  <div class="contactSection">
    <SectionCard icon="send" title="Contact">
      <FormComponent @submit="onSubmit">
        <FormInput type="text" label="Name" :model="name" @update="updateName"></FormInput>
        <FormInput type="text" label="Email" :model="email" @update="updateEmail"></FormInput>
        <FormInput type="textarea" label="Message" :model="message" @update="updateMessage"></FormInput>
      </FormComponent>
    </SectionCard>
  </div>
</template>

<script>
import SectionCard from '@/components/SectionCard';
// import SectionCardSection from '@/components/SectionCard/Section';
import FormComponent from '@/components/FormComponent';
import FormInput from '@/components/FormComponent/FormInput';
// import config from '@/config.js';
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
    // console.log(config);
  },
  methods: {
    onSubmit (recaptchaChallenge) {
      console.log('submitting with challenge: ');
      console.log(recaptchaChallenge);
      axios.post('https://api.resume.bolgarov.org/email', {
        name: this.name,
        email: this.email,
        message: this.message,
        recaptchaChallenge: recaptchaChallenge
      }).then((result) => {
        console.log('success');
      }).catch((error) => {
        console.log('error');
        console.log(error);
      });
    },
    updateName (newVal) {
      console.log(newVal);
      this.name = newVal;
      console.log(this.name);
    },
    updateEmail (newVal) {
      this.email = newVal;
    },
    updateMessage (newVal) {
      this.message = newVal;
    }
  }
};
</script>

<style scoped>
.contactSection {

}
</style>
