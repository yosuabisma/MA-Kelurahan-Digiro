import MainPage from './components/MainPage.vue';
import InformationPage from './components/InformationPage.vue';
import MicroAppPage from './components/MicroAppPage.vue';
export default [
  {path: '/', component: MainPage},
  {path: '/tentang-kelurahan', component: InformationPage},
  {path: '/detail', component: MicroAppPage},
]
