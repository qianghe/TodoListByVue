<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  render: function(createElement) {
    var that = this;

    return createElement('span', {
      class: {
        selectedAction: that.selected
      },
      domProps: {
        innerHTML: that.name
      },
      on: {
        click: function() {
            that.$store.commit('setFilterType',that.name);
        }
      }
    });
  }
}
</script>
