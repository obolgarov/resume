<template>
  <div class="section">
    <div class="content">
      <slot>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
  padding: 1.5em 0;
}
.section:not(:last-of-type) {
  border-bottom: 1px solid #bdbdbd;
}
h3 {
  margin: 0;
  padding: 0;
  font-size: 1em;
  line-height: 1.7em;
  font-weight: 500;
}
h4 {
  margin: 0;
  padding: 0;
  font-size: 0.85em;
  line-height: 1.6em;
  font-weight: 500;
  color: #5da4d9;
}
p {
  margin: 0;
  padding: 0;
  font-size: 0.85em;
  line-height: 1.7em;
  font-weight: 300;
}
</style>
