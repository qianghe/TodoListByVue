<template>
  <ul class="todoList">
      <todo-item v-for="(todo,index) in filterTodoItems" :name="todo.name" :completed="todo.isDone" :index = "index">
      </todo-item>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex'
import TodoItem from './todoItem';

   export default {
     components: {
        todoItem: TodoItem
     },
     computed: {
        ...mapGetters([
           'filterTodoItems'
        ])
     }
   }
</script>
