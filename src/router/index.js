import Vue from 'vue';
import Router from 'vue-router';
import HomeSection from '@/components/HomeSection';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeSection',
      component: HomeSection
    }
  ]
});
