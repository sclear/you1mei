import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//首页
// import index from '@/components/home/index'
//关于我们
// import about from '@/components/about/about'
//联系我们
// import connect from '@/components/connect/connect'
//案例介绍
// import casel from '@/components/case/case'
//案例展示
// import showcase from '@/components/case/showcase'

//====================主页详情 * 4==================
//APP
// import wx from '@/components/home/detail/wx'
// import app_d from '@/components/home/detail/appd'
// import sys from '@/components/home/detail/sys'
// import web from '@/components/home/detail/web'
// import { resolve } from 'path';


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect:{path:'/index'}
    },
    {
      path: '/index',
      component: resolve => require(['@/components/home/index'], resolve),      
      meta: { keepAlive: true }
    },
    {
      path: '/about',
      component: resolve => require(['@/components/about/about'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/connect',
      component: resolve => require(['@/components/connect/connect'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/casel',
      component: resolve => require(['@/components/case/case'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/showcase',
      component: resolve => require(['@/components/case/showcase'], resolve),
      meta: { keepAlive: false }
    },
    {
      path: '/wx',
      component: resolve => require(['@/components/home/detail/wx'], resolve),
    },
    {
      path: '/app_d',
      component: resolve => require(['@/components/home/detail/appd'], resolve),
    },
    {
      path: '/sys',
      component: resolve => require(['@/components/home/detail/sys'], resolve),
    },
    {
      path: '/web',
      component: resolve => require(['@/components/home/detail/web'], resolve),
    },
    {
      path: '/money',
      component: resolve => require(['@/components/money/money'], resolve),
    },
  ]
})
