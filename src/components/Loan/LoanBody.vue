<template>
  <div class="loan-wrapper">
     <LoanInput v-for="{step, key, label} in fields" :key="key" :label="label" :step="step" :field="key" @change="handleChange" />
     <span>your creditworthiness: {{calculateCreditworthiness()}}</span>
     <LoanCredentials @change="handleCredentials"/>
     <button @click="handleUserPush">push user</button>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { fields } from '@/consts/loanFields.js'
import credentialFields from '@/consts/loanCredentialsFields'
import { LoanData, userCredentials } from '@/types/global'
import { calcCredit } from '@/helpers/creditWorth'

import LoanInput from './LoanInput.vue'
import LoanCredentials from './LoanCredentials.vue'

export default defineComponent({
  components: {
    LoanInput,
    LoanCredentials
  },

  data () {
    return {
      fields,
      loanDataStructure: {} as LoanData,
      createdUser: {} as userCredentials<string>,
      users: [] as userCredentials<string>[]
    }
  },

  methods: {
    handleChange (value :string, label: keyof LoanData): void {
      this.loanDataStructure[label] = parseFloat(value)
    },

    calculateCreditworthiness (): number {
      return calcCredit(this.loanDataStructure) || 0
    },

    handleCredentials (value : string, field: keyof userCredentials<string>): void {
      if (field === 'satisfaction') {
        if (typeof parseInt(value) === 'number') {
          this.createdUser[field] = parseInt(value) as userCredentials<string>['satisfaction']
        }
      } else {
        this.createdUser[field] = value
      }
    },

    handleUserPush (): void {
      if (!credentialFields.every(field => Object.keys(this.createdUser).includes(field))) {
        this.$emit('usersUpdate', { name: 'Darek', surname: 'Nowak', dateOfBirth: '12-12-1212', adress: 'asdasda 53, 32-467 dasda' })
      } else {
        this.$emit('usersUpdate', this.createdUser)
      }
    }
  }
})
</script>

<style scoped>
  .loan-wrapper {
    width: 900px;
    border: 2px solid black;
  }

  span {
    width: 200px;
    height: 100px;
    font-size: 50px;
    background-color: red;
  }
</style>
