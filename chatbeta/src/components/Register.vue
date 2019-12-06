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
        class="elevation-6"
        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
        max-height="200px"
        max-width="200px"
      ></v-img>

      <v-card-title>
        <v-row align="center" justify="center">
          <span class="title font-weight-light">Resgister</span>
        </v-row>
      </v-card-title>

      <v-form @submit.prevent="register" class="text-center">
        <v-card-text class="headline font-weight-bold">
          <div class="form-grop pa-3">
            <input
              type="text"
              class="form-control"
              placeholder="Firs Name"
              name="name"
              v-model="name"
            />
          </div>

          <div class="form-grop pa-3">
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              name="lastname"
              v-model="lastname"
            />
          </div>

          <div class="form-grop pa-3">
            <input
              type="email"
              class="form-control"
              placeholder="example@email.com"
              name="email"
              v-model="email"
            />
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

          <div class="form-grop pa-3">
            <input
              type="password"
              class="form-control"
              placeholder="Repeat Password"
              name="password2"
              v-model="password2"
            />
          </div>
        </v-card-text>

        <v-alert type="error" v-if="error">{{ error }}</v-alert>

        <v-card-actions>
          <v-list-item class="grow">
            <v-row align="center" justify="center">
              <v-btn large type="submit" color="primary">Register</v-btn>
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
  name: "register",
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      error: ""
    };
  },
  methods: {
    register() {
      if (this.name && this.lastname && this.email && this.password && this.password2) {
        if (this.password2 != this.password) {
          this.error = "Contraseñas incorrectas"
        } else {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
            //Actualizar datos usuario
            user = firebase.auth().currentUser;
            if(user){ 
              user.updateProfile({
                displayName: this.name
              }).then((u) => {
                this.name=""
                this.lastname=""
                this.password=""
                this.password2=""
                this.email=""   
                this.$router.push({ name: 'user' })
              }).catch((err) => {
                this.error = err.message
              })
            }
          }).catch((err) => {
              this.error = err.message
          })
        }
      } else {
        //mandar error
        this.error = "Todos los campos son requeridos"
      }
    }
  }
};
</script>
