import Vue from 'vue';
import Router from 'vue-router';
import ResumeSection from '@/components/ResumeSection';
import ProjectsSection from '@/components/ProjectsSection';

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
      path: '/Projects',
      name: 'ProjectsSection',
      component: ProjectsSection
    }
  ]
});
