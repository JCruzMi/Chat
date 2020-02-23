<template>
  <v-app-bar app color="secondary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Chat logo"
        class="shrink mr-2"
        contain
        src="https://upload.wikimedia.org/wikipedia/commons/8/85/Circle-icons-chat.svg"
        transition="scale-transition"
        width="40"
        v-if="!user"
      />  

      <v-img
        alt="Chat text"
        href="/"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://i.ya-webdesign.com/images/png-transparent-text-2.png"
        transition="scale-transition"
        width="100"
        v-if="!user"
      />
    </div>

    <v-btn
      href="/"
      target=""
      text
      v-if="!user"
    >
      <span class="mr-2">Home</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>

    <v-btn
      href="/login"
      target=""
      text
      v-if="!user"
    >
      <span class="mr-2">Login</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>


    <v-btn
      href="/register"
      target=""
      text
      v-if="!user"
    >
      <span class="mr-2">Register</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>


    <v-btn v-if="user" color="secondary" text disabled>
        <span class="mr-2">{{user.displayName || user.email}}</span>
        <v-avatar>
          <img
          transition="scale-transition"
          alt="Img User"
        src=""
      >
        </v-avatar>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      href=""
      target="_blank"
      text
      v-if="!user"
    >
      <span class="mr-2">Discord</span>
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
    name: 'navar',
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