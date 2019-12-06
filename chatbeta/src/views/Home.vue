<template>
  <v-container>
    <v-layout wrap>
      
      <Login></Login>
      <register></register>
      
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'home',
  components: {
    Login,
    Register
  }
}
</script>
