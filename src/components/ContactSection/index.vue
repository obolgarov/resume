<template>
  <div class="contactSection">
    <SectionCard icon="send" title="Contact">
      <FormComponent @submit="onSubmit">
        <FormInput type="text" label="Name" :model="name" @update="(newVal) => {name = newVal}"></FormInput>
        <FormInput type="text" label="Email" :model="email" @update="(newVal) => {email = newVal}"></FormInput>
        <FormInput type="textarea" label="Message" :model="message" @update="(newVal) => {message = newVal}"></FormInput>
      </FormComponent>
      <h4 class="status" v-if="messageStatus.length > 0">{{messageStatus}}</h4>
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
      message: '',
      messageStatus: ''
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
        this.name = '';
        this.email = '';
        this.message = '';
        this.messageStatus = 'Message Sent';
      }).catch((error) => {
        console.log('message error');
        console.log(error);
        this.messageStatus = 'Error Sending Message';
      });
    }
  }
};
</script>

<style scoped>
.contactSection {

}
.status {
  margin: 0;
  padding: 0;
  font-size: 0.85em;
  line-height: 1.6em;
  font-weight: 500;
  color: #5da490;
}
</style>
