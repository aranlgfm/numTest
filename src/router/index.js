import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import numChat from '@/components/numChat'

// import aranTest from '@/components/aranTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'numChat',
      component: numChat
    },
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
