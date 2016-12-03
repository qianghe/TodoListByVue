import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  todoItems: [
    {name: 'to do a meaning thing', isDone: false},
    {name: 'to write a book', isDone: false}
  ],
  todoActions : [
      {name: 'All', selected: true},
      {name: 'Active', selected: false},
      {name: 'Completed', selected: false}
  ],
  filterType: 'All',
}

const actions = {}

const mutations = {
  //添加一项
  addTodoItem(state, {item}){
      state.todoItems.push(item);
  },
  //删除一项
  deleteTodoItem(state, index){
      state.todoItems.splice(index, 1);
  },
  //删除所有项目
  clearTodoItems(state){
      state.todoItems = [];
  },
  //改变当前项目状态
  setFilterType (state, type){
      state.filterType = type;

      state.todoActions.forEach(action => {
          action.selected = false;
          if(action.name == state.filterType) action.selected = true;
      })
  },
  //选中一项、取消一项
  toggleTodoItem(state, index){
      let toggleItem = state.todoItems[index];
      toggleItem.isDone = !toggleItem.isDone;
      state.todoItems.splice(index,1,toggleItem);
  }
}

const getters  = {
    activeTodoLength(state){
          return state.todoItems.filter(item => !item.isdone).length
    },
    filterTodoItems(state){
         return state.todoItems.filter(item => {
            if(state.filterType == 'All') return 1;
            else if(state.filterType == 'Active') return !item.isDone;
            else return item.isDone;
         })
    },
    getFilterType: state => state.filterType,
    getTodoActions: state => state.todoActions
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
})
