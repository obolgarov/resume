<template>
  <div class="sideBar">

    <div class="headshot">
      <img :src="headshot" />

      <!-- <div class="title">
        <h2>Oleksandr Bolgarov</h2>
        <h3>Software Developer</h3>
        <h3>tagline</h3>
      </div> -->
    </div>

    <div class="title">
      <h2>Oleksandr Bolgarov</h2>
      <h3>Software Developer</h3>
      <h3>tagline</h3>
    </div>

    <svgicon icon="person" class="blurb-icon" color="#ffffff"></svgicon>

    <p class="blurb">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue velit eu nulla fermentum accumsan. Nullam eu mi nec ex aliquet condimentum vel id lectus.
    </p>

  </div>
</template>

<script>
import Card from '@/components/Card';
export default {
  name: 'SideBar',
  components: {
    Card
  },
  data () {
    return {
      headshot: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-05/20/13/campaign_images/webdr01/what-your-favorite-stock-photo-spaghetti-person-s-2-7471-1432142821-2_dblbig.jpg'
    };
  }
};
</script>

<style scoped>
.sideBar {
  margin: 1em 0.5em 0em 0.5em;
  padding: 2em;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

  padding: 0;
  background-color: #5da4d9;
  display: grid;
  position: relative;
  grid-template-columns: 25% auto;
  grid-template-rows: auto auto auto;
}
.headshot {
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  position: static;
}
.headshot img{
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: block;
}
/* .headshot .title {
  position: absolute;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  left: 0;
  bottom: 2rem;

  color: #2196f3;
  text-align: left;
} */

.title {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  color: white;
  text-align: left;
  margin-top: 1em;
}

.title h2 {
  font-weight: 600;
  font-size: 1.8em;
  line-height: 1.5em;
  margin: 0;
  padding: 0;
}
.title h3 {
  font-weight: 600;
  font-size: 1em;
  line-height: 1.5em;
  padding: 0;
  margin: 0;
}
.blurb-icon {
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  width: 2rem;
  display: block;
  margin: 2em auto 0 auto;

}
.blurb{
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  text-align: left;
  color: white;
  font-weight: 300;
  font-size: 0.85em;
  line-height: 1.7em;
  border-top: 1px solid #4783c2;
  padding-top: 1em;
}
</style>
