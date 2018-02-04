<template>
  <transition name="cardFade">
    <div class="card">
      <slot>
      </slot>
    </div>
  </transition>
</template>

<script>
export default {

};
</script>

<style scoped>
.card {
  margin: 1em 0.5em 0em 0.5em;
  background-color: white;
  /* padding: 2em; */
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
}

.cardFade-enter {}

.cardFade-enter-active {}

.cardFade-leave {}

.cardFade-leave-active {}
</style>
