// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';

//强大的css3动画库
import 'animate.css'
import './assets/public.css'

//懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

//引用axios
import axios from 'axios'
Vue.prototype.$axios = axios;

//DIY  TOAST
import { toast } from './utils/tool'
Vue.prototype.$toast = toast

//环境变量 配置 dev OR pro
import { Imgurl } from './utils/env'
Vue.prototype.$url = Imgurl


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
