<template>
    <div class="btn">
      <button @click="handleClick(text)" :style="computedStyles">{{text}}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    text: {
      type: [String, Number],
      dafault: ''
    },

    width: {
      type: String,
      dafault: ''
    },

    height: {
      type: String,
      deafult: ''
    }
  },

  computed: {
    computedStyles (): object {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    }
  },

  methods: {
    handleClick (value: string): void {
      this.$emit('click', value)
    }
  }
})

</script>

<style lang="scss" scoped>
.btn {
  display: flex;

  button {
    flex-grow: 1;
    margin: -1px;
    border: 1px solid black;
    font-size: 20px;
  }

  button:hover {
    background-color: #ccc;
    cursor: pointer;
  }
}
</style>
