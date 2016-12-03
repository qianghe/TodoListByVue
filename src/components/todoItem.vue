<script>
export default{
  props: {
      name: {
          type: String,
          required: true
      },
      completed: {
          type: Boolean,
          required: true
      },
      index: {
          type: Number,
          required: true
      }
  },
  render: function (createElement) {
      var that = this;

      return createElement('transition', {
          attrs: {
              name: 'fade'
          }
      }, [createElement('li', {
                  class: {
                      activeItem: that.completed ? false : true,
                      completedItem: that.completed ? true : false
                  }
              }, [createElement('span', {
                  on: {
                      click: function () {
                        that.$store.commit('toggleTodoItem',that.index);
                      }
                  }
              }),
                  createElement('span', {
                      domProps: {
                          innerHTML: that.name
                      }
                  }),
                  createElement('span', {
                      on: {
                          click: function () {
                              that.$store.commit('deleteTodoItem',that.index);
                          }
                      }
                  }, 'x')]
      )]);

  }
}

</script>
