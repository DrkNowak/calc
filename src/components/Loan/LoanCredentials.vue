<template>
  <p>CREDENTIALS</p>
  <div v-for="field in loanCredentialsFields" :key="field">
      <span>{{ field }}</span>
      <input ref="input" @change="handleChange($event, field)"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import loanCredentialsFields from '@/consts/loanCredentialsFields'

export default defineComponent({
  emits: ['change'],

  data () {
    return {
      loanCredentialsFields
    }
  },

  methods: {
    handleChange (event: { target: HTMLInputElement }, field: string): void {
      this.$emit('change', event.target.value, field)
    }
  }
})
</script>

<style lang="scss" scoped>
p {
  margin-top:20px;
  font-size: 50px;
}
</style>
