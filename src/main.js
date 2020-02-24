import Vue from 'vue'
import  'lib-flexible/flexible'
import router from './router'
import App from './App.vue'
import waterfall from 'vue-waterfall2'

Vue.use(waterfall)
Vue.config.productionTip = false
new Vue({
      el: '#app',
      components: {App},
      template: '<App />',
      router,
    })

