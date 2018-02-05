import Vue from 'vue';
import Router from 'vue-router';
import ResumeSection from '@/components/ResumeSection';
import PortfolioSection from '@/components/PortfolioSection';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ResumeSection',
      component: ResumeSection
    },
    {
      path: '/Portfolio',
      name: 'PortfolioSection',
      component: PortfolioSection
    }
  ]
});
