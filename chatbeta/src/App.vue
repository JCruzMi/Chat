<template>
  <v-app>
    <Nav></Nav>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home';
import Nav from './components/Nav.vue'

export default {
  name: 'App',

  components: {
    Home,
    Nav,
  },

  data: () => ({
    //
  }),
};
</script>
