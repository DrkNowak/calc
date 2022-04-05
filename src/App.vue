<template>
  <div class="wrapper">
    <CalculatorBody />
    <LoanBody @usersUpdate="handleUsersUpdate"/>
  </div>
  <button @click="sendUsers">finish</button>
  <div v-for="(user, index) in usersParagraphMock" :key="index">
    <span v-for="field in user" :key="field">{{field + ' '}} </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CalculatorBody from './components/CalculatorBody.vue'
import LoanBody from './components/Loan/LoanBody.vue'

import { User, Users, SatisfiedUser } from '@/helpers/userData'
import { userCredentials, satisfiedUserCredentials } from '@/types/global'

export default defineComponent({
  name: 'App',
  components: {
    LoanBody,
    CalculatorBody
  },

  data () {
    return {
      usersArr: [] as userCredentials <string> [],
      usersArrMapped: new Users([]),
      usersParagraphMock: [] as userCredentials <string> []
    }
  },

  methods: {
    handleUsersUpdate (user : satisfiedUserCredentials<userCredentials<string>>) : void {
      let createdUser = {} as userCredentials<string>
      if (Object.keys(user).includes('satisfaction')) {
        createdUser = new SatisfiedUser(user)
      } else {
        const args = Object.values(user) as [string, string, string, string]
        createdUser = new User(...args)
      }
      this.usersArrMapped.addUser(createdUser)
    },

    sendUsers () : void {
      this.usersParagraphMock = this.usersArrMapped.sendUsers()
    }
  }
})
</script>

<style lang="scss" scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  display: flex;
}

.wrapper > * {
  margin-left: 20px;
}

button {
  width: 50px;
  height: 50px;
}
</style>
