import Vue from 'vue';
import Router from 'vue-router';
import HomeSection from '@/components/HomeSection';
import SkillsSection from '@/components/SkillsSection';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeSection',
      component: HomeSection
    },
    {
      path: '/Skills',
      name: 'SkillsSection',
      component: SkillsSection
    }
  ]
});
