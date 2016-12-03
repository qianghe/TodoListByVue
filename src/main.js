import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/index'
import Todo from './App'

Vue.use(Vuex);

new Vue({
  el: '#app',
  store,
  template: '<Todo/>',
  components: {
    'Todo': Todo
  },
  created(){
    console.log(this.$store);
  }
})
