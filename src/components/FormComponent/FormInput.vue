<template>
  <div :class="{
    formInput: true,
    focused: focused,
    filled: model.length > 0,
    valid: validator ? !validator.$invalid : true,
  }">
    <label v-if="label">
      {{label}}
    </label>

    <textarea v-if="type == 'textarea'" v-model="computedValue"
    @focus="focused = true"
    @blur="focused = false"/>
    <input v-else type="text" v-model="computedValue"
    @focus="focused = true"
    @blur="focused = false"/>
  </div>
</template>

<script>

export default {
  name: 'FormInput',
  components: {
  },
  props: [
    'model',
    'type',
    'label',
    'validator'
  ],
  data () {
    return {
      focused: false
    };
  },
  computed: {
    computedValue: {
      get () {
        return this.model;
      },
      set (newVal) {
        this.$emit('update', newVal);
      }
    }
  }
};
</script>

<style scoped>
.formInput {
  width: auto;
  margin: 1em 1em 0 0;
  padding: 1em 0 0 0;
  position: relative;
}

label {
  position: absolute;
  font-size: 1em;
  top: 2em;
  transition: all .2s;
  color: #9e9e9e;
  pointer-events: none;
}

.formInput.focused label, .formInput.filled label {
  transform: translateY(-2em);
  font-size: 0.8em;
}

input[type="text"] {
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 3em;
}

textarea {
  display: block;
  width: 100%;
  height: 6em;
  min-height: 3em;
  resize: vertical;
  padding: 0;
  margin: 1em 0 0 0;
  font-family: 'Roboto', sans serif;
}

input, textarea {
  box-sizing: border-box;
  font-size: 1em;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  transition: border 0.3s;
}
.formInput.focused input,.formInput.focused textarea {
  border-bottom: 3px solid #5da4d9;
}
.formInput.filled:not(.focused):not(.valid) input,.formInput.filled:not(.focused):not(.valid) textarea {
  border-bottom: 3px solid #f44336;
}
.formInput.filled.valid:not(.focused) input,.formInput.filled.valid:not(.focused) textarea {
  border-bottom: 3px solid #4caf50;
}

input:focus, textarea:focus {
  outline: none; /* we're making our own highlight */
}
</style>
