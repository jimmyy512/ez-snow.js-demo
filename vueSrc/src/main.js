import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import animate from 'animate.css';
import '../assets/css/normalize.css';
import '@/icons';

//extension javascript
Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
      this.splice(index, 1);
  }
};

//ElementUI init
Vue.use(ElementUI, { size: 'small' })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  animate
})