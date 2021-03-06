// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // data () {
  //   return {
  //     dismissSecs: 5,
  //     dismissCountDown: 0
  //   }
  // },
  // methods: {
  //   countDownChanged (dismissCountDown) {
  //     this.dismissCountDown = dismissCountDown
  //   },
  //   showAlert () {
  //     this.dismissCountDown = this.dismissSecs
  //   }
  // },
  router,
  template: '<App/>',
  components: { App }
})
