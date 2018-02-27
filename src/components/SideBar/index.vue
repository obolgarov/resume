<template>
  <div class="gridContainer">
    <div class="sideBar">
      <div class="headshot">
        <img :src="headshot" />

        <div class="title">
          <h2>Oleksandr Bolgarov</h2>
          <h3>Software Developer</h3>
          <h3>tagline</h3>
        </div>
      </div>

      <!-- <div class="title">
        <h2>Oleksandr Bolgarov</h2>
        <h3>Software Developer</h3>
        <h3>tagline</h3>
      </div> -->

      <SideBarSection icon="person">
        <p>
          Software/Web Developer with experience in modern development techniques.
        </p>
      </SideBarSection>

      <SideBarSection icon="github">
        <h3 class="centered">
          <a href="https://github.com/obolgarov">github.com/obolgarov</a>
        </h3>
      </SideBarSection>

      <SideBarSection icon="linkedin">
        <h3 class="centered">
          <a href="https://www.linkedin.com/in/oleksandr-bolgarov-51025794/">LinkedIn</a>
        </h3>
      </SideBarSection>

      <SideBarSection icon="phone">
        <h3 class="centered">(416)-707-3330</h3>
      </SideBarSection>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';
import SideBarSection from '@/components/SideBar/Section';
export default {
  name: 'SideBar',
  components: {
    Card,
    SideBarSection
  },
  data () {
    return {
      // headshot: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-05/20/13/campaign_images/webdr01/what-your-favorite-stock-photo-spaghetti-person-s-2-7471-1432142821-2_dblbig.jpg'
      headshot: 'http://oleksandr.bolgarov.org/images/id.jpg'
    };
  }
};
</script>

<style scoped>
.gridContainer {
  height: auto;
  width: auto;
  display: block;
}
.sideBar {
  margin: 1em 0.5em 0em 0.5em;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);

  padding: 0;
  padding-bottom: 1em;
  background-color: #2196f3;
  position: relative;

  display: grid;
  grid-template-columns: 25% auto;
}
.headshot {
  grid-column: 1 / 3;
}
.headshot img{
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  display: block;
}
.headshot .title {
  position: absolute;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  left: 0;
  bottom: 2rem;

  color: white;
  text-align: left;
}

.title {
  grid-row: 2;
  grid-column: 2;
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

h3.centered {
  margin: 0.5em 0;
}
a {
  color: inherit;
}

@media (min-width: 60em) {
  #mainContainer {
  }
  .title h2 {
    font-size: 1.6em;
  }
}

@media (min-width: 80em) {
  #mainContainer {
  }

  .title h2 {
    font-size: 1.8em;
  }
}
</style>
