<template>
  <div class="loan-body">
     <LoanInput v-for="{step, key, label} in fields" :key="key" :label="label" :step="step" :field="key" @change="handleChange" />
     <span>your creditworthiness: {{calculateCreditworthiness()}}</span>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { fields } from '@/consts/loanFields.js'
import { LoanData } from '@/types/global'
import { calcCredit } from '@/helpers/creditWorth'

import LoanInput from './LoanInput.vue'
export default defineComponent({
  components: {
    LoanInput
  },

  data () {
    return {
      fields,
      loanDataStructure: {} as LoanData
    }
  },

  methods: {
    handleChange (value :string, label :string): void {
      this.loanDataStructure[label] = parseFloat(value)
    },

    calculateCreditworthiness (): number {
      return calcCredit(this.loanDataStructure) || 0
    }
  }
})
</script>

<style scoped>
  span {
    width: 200px;
    height: 100px;
    font-size: 50px;
    background-color: red;
  }
</style>
