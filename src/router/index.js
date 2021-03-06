
import Vue from "vue";
import Router from "vue-router";

import HomeScreen from '../components/HomeScreen/HomeScreen.vue'
import ShowChartScreen from '../components/ShowChartsScreen/ShowChartScreen.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomeScreen",
      component: HomeScreen
    },
    {
      name: "ShowChartScreen",
      path: "/showChartScreen",
      component: ShowChartScreen,
      props: true 
    }
  ]
});