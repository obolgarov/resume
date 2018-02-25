<template>
  <div class="formComponent">
    <form @submit.prevent="onSubmit">
      <slot></slot>
      <!-- <VueRecaptcha sitekey="6Lf-GEgUAAAAAJ9vftl6mZpcdAf-WlXmZVV3gJmL"></VueRecaptcha> -->
      <!-- <div id="g-recaptcha" class="g-recaptcha"
      :data-sitekey="sitekey"
      :data-callback="testFunc"
      data-size="invisible">
      </div> -->
      <VueRecaptcha ref="recaptcha" :sitekey="sitekey" size="invisible" @verify="onRecaptchaVerify"></VueRecaptcha>
      <input type="submit" value="submit">
    </form>
  </div>
</template>

<script>
// import SectionCard from '@/components/SectionCard';
// import SectionCardSection from '@/components/SectionCard/Section';
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'FormComponent',
  components: {
    VueRecaptcha
  },
  data () {
    return {
      sitekey: '6LcUg0gUAAAAAPvtbkRbSeYXpHbaSYMQ7_DylFFc'
    };
  },
  methods: {
    onSubmit (event) {
      this.$refs.recaptcha.execute();
    },
    onRecaptchaVerify (response) {
      this.$emit('submit', response);
    }
  }
};
</script>

<style scoped>
.formComponent {
  width: 100%;
  padding: 1.5em 0;
}

input[type="submit"] {
  font-size: 1em;
  font-weight: 500;
  padding: 0.7em 2em 0.6em 2em;
  border: none;
  border-radius: 0.2em;
  background-color: #5da4d9;
  text-transform: uppercase;
  color: white;
  transition: box-shadow 0.3s;
  margin-top: 1em;
}
input[type="submit"]:hover {
  cursor: pointer;
  box-shadow: 0 3px 9px rgba(0,0,0,0.16), 0 3px 9px rgba(0,0,0,0.23);
}
</style>
