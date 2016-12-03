<template>
   <div class="todo-component">
        <todo-header></todo-header>
        <todo-input></todo-input>
        <todo-lists></todo-lists>
        <todo-footer></todo-footer>
   </div>
</template>
<script>
  // import Vue from 'vue'
  // import Vuex from 'vuex'
  import todo from './store/index'
  import todoHeader from './components/todoHeader'
  import todoInput from './components/todoInput'
  import todoLists from './components/todoList'
  import todoFooter from './components/todoFooter'

  export default{
      components:{
        'todoHeader': todoHeader,
        'todoInput': todoInput,
        'todoLists' : todoLists,
        'todoFooter' : todoFooter
      }
  }
</script>
<style lang="scss">
  @import './todolist.scss'
</style>
