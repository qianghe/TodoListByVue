<template>
      <div class="todo-header">
          <p>
            <span class="todo-header-day">{{computedDay}}</span>
            <span class="todo-header-num">{{activeTodoLength}} items</span>
          </p>
          <p class="todo-header-month">{{computedMonth}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MAP from '../store/api'

export default {
  data() {
    return {
          showData: null,
    }
  },
  computed: {
    ...mapGetters([
        'activeTodoLength'
    ]),
    computedDay() {
      let dayArr = MAP.DAYSET;
      return dayArr[this.showData.getDay()] + ',' + this.showData.getDate() + 'th';
    },
    computedMonth() {
      let monthArr = MAP.MONTHSET;

      return monthArr[this.showData.getMonth()];
    }
  },
  created: function () {
      this.showData = new Date();
      console.log('123123',this.$store);
  }
}
</script>
