import { lazy } from 'react';

const Home = lazy(() => import('components/Home'));
const Template = lazy(() => import('components/Template'));
const ResumeBuilder = lazy(() => import('components/ResumeBuilder'));

export default [
  {
    routeProps: {
      path: '/',
      component: Home,
      exact: true,
      private: false,
    },
    name: 'home',
  },
  {
    routeProps: {
      path: '/template',
      component: Template,
      exact: true,
      private: false,
    },
    name: 'Template',
  },
  {
    routeProps: {
      path: '/resume-builder/:id',
      component: ResumeBuilder,
      exact: true,
      private: false,
    },
    name: 'ResumeBuilder',
  },
];
