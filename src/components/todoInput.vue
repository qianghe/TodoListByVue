<template>
  <div class="todo-input">
        <span class="fa fa-plus add-icon"></span>
        <input
                ref="input"
                placeholder="type sth you want do.."
                v-model="inputText"
                @keyup.enter="addTodoItem"
        />
    </div>
</template>
<script>
export default {
    data(){
     return {
         inputText: ''
     }
   },
   methods: {
       addTodoItem(){
            let _this  = this;
            this.$store.commit({
              type: 'addTodoItem',
              item : {
                    name: _this.inputText.trim(),
                    isDone: false
              }
            })

            this.inputText = '';
            this.$refs.input.value = '';
       }
   },
}
</script>
