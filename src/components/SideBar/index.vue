<template>
  <div class="gridContainer">
    <div class="sideBar">
      <div class="headshot">
        <img :src="headshot" />
        <!-- <div class="title">
          <h2>Oleksandr Bolgarov</h2>
          <h3>Software Developer</h3>
          <h4>tagline</h4>
        </div> -->
      </div>

      <div class="contents">

        <div class="title">
          <h2>Oleksandr Bolgarov</h2>
          <h3>Software Developer</h3>
          <h4>tagline</h4>
        </div>

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
.contents {
  position: relative;
  display: grid;
  grid-template-columns: 25% auto;
  grid-column: 1 / 3;
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
  grid-column: 1 / 3;
}

.title { /* for out-of-headshot titles */
  grid-column: 2;
  color: white;
  text-align: left;
  position: absolute;
  padding-bottom: 1em;
  transform: translateY(-100%);
}

.title h2 {
  font-weight: 400;
  font-size: 1.8em;
  margin: 0;
  padding: 0;
}
.title h3 {
  font-weight: 600;
  font-size: 1em;
  padding: 0;
  margin: 0;
}
.title h4 {
  font-weight: 400;
  font-size: 1em;
  margin: 0;
  padding: 1em 0 0 0;
}

h3.centered {
  margin: 0.5em 0;
}
a {
  color: inherit;
}

@media (min-width: 40em) {
  #mainContainer {
  }
  .headshot {
    grid-column: 1 / 2;
  }
  .title {
    position: static;
    display: flex;
    transform: none;
    margin-top: -50%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}

@media (min-width: 60em) {
  #mainContainer {
  }
  .headshot {
    grid-column: 1 / 3;
  }
  .title {
    position: absolute;
    display: block;
    transform: translateY(-100%);
    margin-top: 0;
  }
  .title h2 {
    font-size: 1.6em;
  }
}
@media (min-width: 80em) {
  .title h2 {
    font-size: 1.8em;
  }
}
</style>
