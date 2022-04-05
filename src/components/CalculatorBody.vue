<template>
  <div class="body">
    <div class="calc">
      <CalculatorResult @blur="handleBlur" :query="query" />
      <div class="calc__btns">
        <div class="calc__numbers">
          <CalculatorButton
            @click.self="handleClick"
            v-for="number in numbers"
            :key="number"
            :text="number"
            height="100"
          />
        </div>
        <div class="calc__actions">
          <CalculatorButton
            @click.self="handleClick"
            v-for="action in actions"
            :key="action"
            :text="action"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CalculatorButton from './CalculatorButton.vue'
import CalculatorResult from './CalculatorResult.vue'
import { Parser } from 'expr-eval'

import { numbers, actions } from '../consts/buttons'

type Event = {
  target: { value: string };
};

export default defineComponent({
  components: {
    CalculatorButton,
    CalculatorResult
  },
  data () {
    return {
      numbers,
      actions,
      query: '' as string
    }
  },
  methods: {
    handleBlur (event: Event): void {
      this.query = event.target.value
    },

    handleClick (value: string): void {
      const lastChar = [...this.query][this.query.length - 1]

      if (value === 'c') {
        this.query = ''
      } else if (
        Object.values(this.actions).includes(lastChar) &&
        Object.values(this.actions).includes(value)
      ) {
        this.query = this.query.slice(0, this.query.length - 1) + value
      } else if (value === '=') {
        if (this.query.length > 2) {
          this.query = Parser.parse(this.query).evaluate() + ''
        }
      } else {
        this.query += value
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.body {
  display: flex;
}

.calc {
  width: 600px;
  height: 500px;
  margin-left: 50px;

  &__btns {
    display: flex;

    * {
      flex-grow: 1;
    }

    .calc__numbers {
      display: flex;
      flex-wrap: wrap;
      flex-basis: 60%;

      & * {
        flex-basis: 33%;
        flex-grow: 1;
      }
    }

    .calc__actions {
      display: flex;
      flex-wrap: wrap;
      border-left: 2px solid grey;

      & * {
        flex-basis: 40%;
        flex-grow: 1;
      }
    }
  }
}
</style>
