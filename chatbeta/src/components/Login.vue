<template>
  <v-container>
    <v-card
      class="mx-auto pa-3"
      align="center"
      justify="center"
      color="#26c6da"
      dark
      max-width="600"
    >
      <v-img
        transition="scale-transition"
        class="elevation-6"
        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        max-height="200px"
        max-width="200px"
      ></v-img>

      <v-card-title>
        <span class="title font-weight-light">Login</span>
      </v-card-title>

      <v-form @submit.prevent="login" class="text-center">
        <v-card-text class="headline font-weight-bold">

          <div class="form-grop pa-3">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              v-model="email"
            />
            <p v-if="errorText" class="text-danger">{{ errorText }}</p>
          </div>

          <div class="form-grop pa-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              v-model="password"
            />
          </div>
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-row align="center" justify="center">
              <v-btn large type="submit" color="primary">Log in</v-btn>
              <span class="subheading mr-6"></span>
              <v-btn large color="primary">Register</v-btn>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>

import db from'@/firebase/init.js'
import firebase from 'firebase'


export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      errorText: null,
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((user) => {
              this.$router.push({ name: "user" });
          }).catch((err) => {
              this.error = err.message
          })
      } else {
        this.errorText = "Please enter User ID!";
      }
    }
  }
};
</script>

<style lang=""></style>
