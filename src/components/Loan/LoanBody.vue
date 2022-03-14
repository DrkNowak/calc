<template>
  <div class="loan-body">
     <LoanInput v-for="{step, key, label} in fields" :key="key" :label="label" :step="step" />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { fields } from '@/consts/loanFields'

import LoanInput from './LoanInput.vue'
export default defineComponent({
  components: {
    LoanInput
  },
  data () {
    return {
      fields
    }
  }

})
</script>

<style>

</style>
