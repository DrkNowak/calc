<template>
  <CalculatorBody />
  <LoanBody />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CalculatorBody from './components/CalculatorBody.vue'
import LoanBody from './components/Loan/LoanBody.vue'

export default defineComponent({
  name: 'App',
  components: {
    LoanBody,
    CalculatorBody
  }
})
</script>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
