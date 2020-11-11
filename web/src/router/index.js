import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history', // パス末尾へ'#'が追加されるのを防ぐ
  routes: [
    {
      // '/'に対して、frontend/src/components/ 配下のHelloWorld.vueファイルを参照する
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // '/home'に対して、frontend/src/components/ 配下のHome.vueファイルを参照する
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
