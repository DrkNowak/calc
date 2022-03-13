<template>
       <input ref="input" :value="query" class="result-bar">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    query: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {
      inputVal: ''
    }
  }
})
</script>

<style lang="scss" scoped>
    .result-bar {
        width: 604px;
        height: 80px;
        margin-left: -2px;
        background-color: grey;
        color: aquamarine;
        font-size: 70px;
        text-align: right;
        border: 3px solid black;
    }

</style>
