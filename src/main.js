import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mapBoxGl from 'mapbox-gl'
import axios from 'axios';

Vue.prototype.$http = axios;
Vue.prototype.mbgl = mapBoxGl
Vue.use(ElementUI)
const echarts = require('echarts');
const bus = new Vue();
Vue.prototype.$bus = bus;


Vue.prototype.$echarts = echarts;


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
