<template>
  <label>{{label}}</label>
  <div class="loan-input">
    <button @click="handleAdd">+</button>
    <input ref="input" :value ="rangeVal" @change="handleChange"/>
    <button @click="handleSubtract">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { InputRef } from '@/types/global'

export default defineComponent({
  emits: ['change'],

  props: {
    label: { type: String, default: '' },
    field: { type: String, default: '' },
    step: { type: Number, default: 0 }
  },
  data () {
    return {
      rangeVal: '0' as string
    }
  },

  methods: {
    handleSubtract () : void {
      const refs = this.$refs as InputRef
      if (refs.input.value >= this.step && !!refs.input.value) {
        (refs.input.value as number) = parseFloat(refs.input.value as string) - this.step
      }

      this.$emit('change', refs.input.value, this.field)
    },

    handleAdd () : void {
      const refs = this.$refs as InputRef

      refs.input.value = +this.step + parseFloat(refs.input.value as string)

      this.$emit('change', refs.input.value, this.field)
    },

    handleChange () : void {
      const refs = this.$refs as InputRef
      this.$emit('change', refs.input.value, this.field)
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
    width: 160px;
    font-size: 30px;
  }
}
</style>
