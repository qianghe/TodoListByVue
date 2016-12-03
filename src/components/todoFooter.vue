<template>
    <div class="todo-footer clearfix">
          <div class="footer-action">
              <todo-action
                      v-for="(action,index) in todoActions"
                      :name="action.name"
                      :selected="action.selected"
                      :index="index"
              ></todo-action>
          </div>
          <div class="todo-clear"  @click="removeAllItem">
              clear all
         </div>
      </div>
</template>
<script>
import { mapGetters } from 'vuex'
import todoAction from './todoAction';

export default {
    components: {
      'todoAction': todoAction
    },
    computed:{
      ...mapGetters({
        todoActions: 'getTodoActions'
      })
    },
    methods: {
      removeAllItem (){
          console.log('footer remove');
          this.$store.commit('clearTodoItems');
      }
    }
}
</script>
