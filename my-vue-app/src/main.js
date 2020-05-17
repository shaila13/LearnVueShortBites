import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Global component over here

Vue.component('ComponentA',{
template: '<h1>Hello, I am a global component</h1>'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
