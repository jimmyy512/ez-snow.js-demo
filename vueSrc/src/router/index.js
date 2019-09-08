import Vue from 'vue';
import Router from 'vue-router';
import main from "src/pages/demo";
// import main from "src/pages/main";
import demo from "src/pages/demo";
import test from "src/pages/test";

Vue.use(Router)
export default new Router({
  // mode: 'history',    //沒有配合後端時 build後 會沒有東西//
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: [
    {
      path: '',
      redirect: '/main'
    },
    {
      path: '*',
      redirect: '/main'
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/test',
      component: test
    },
    {
      path: '/demo',
      component: demo
    },
    
  ]
})