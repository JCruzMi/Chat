<template>
  <v-app>
    <Navar></Navar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home';
import Navar from './components/Navar.vue'

export default {
  name: 'App',

  components: {
    Home,
    Navar,
  },

  data: () => ({
    //
  }),
};
</script>
