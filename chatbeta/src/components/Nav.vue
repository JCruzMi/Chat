<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
        v-if="!user"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
        v-if="!user"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
      v-if="!user"
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>

    <v-btn v-if="user" color="secondary" text @click.prevent="logout">
        <span class="mr-2">Log out</span>
        <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>

</template>

<script>

import firebase from 'firebase'

export default {
    name: 'nav',
    data(){
        return{
            user: null
        };
    },
    methods: {
        logout(){
            firebase.auth().signOut().then(() => {
                this.$router.push({name : 'home'})
            })
        },
    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            if (user){
                this.user = user
            } else {
                this.user = null
            }
        })
    }
}
</script>