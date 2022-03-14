<template>
  <label>{{label}}</label>
  <div class="loan-input">
    <button @click="handleAdd">+</button>
    <input type="number" ref="input" :value ="rangeVal"/>
    <button @click="handleSubtract">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { InputRef } from '@/types/global'

export default defineComponent({

  props: {
    label: { type: String, default: '' },
    step: { type: Number, default: 0 }
  },
  data () {
    return {
      rangeVal: '1'
    }
  },

  methods: {
    handleSubtract () : void {
      const refs = this.$refs as InputRef
      if (refs.input.value >= this.step && !!refs.input.value) {
        (refs.input.value as number) = parseFloat(refs.input.value as string) - this.step
      }

      this.$emit('change', refs.input.value)
    },

    handleAdd () : void {
      const refs = this.$refs as InputRef
      refs.input.value = +this.step + parseFloat(refs.input.value as string)

      this.$emit('change', refs.input.value)
    }
  }
})
</script>

<style lang="scss" scoped>

.loan-input {
  display: flex;

  button {
    width: 50px;
    height: 50px;
    font-size: 30px;
  }

  input {
    width: 60px;
    font-size: 30px;
  }
}
</style>
