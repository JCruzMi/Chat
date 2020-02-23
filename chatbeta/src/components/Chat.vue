<template>
    <div class="container chat">
        <br>
    <v-card
        max-width="400"
        class="mx-auto"
        >
        
        <v-app-bar
        dark
        color="pink"
        >

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>RealTime Chat</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        
        </v-app-bar>

        <v-container>
            hola
        </v-container>
    </v-card>
    </div>
</template>

<script>
import fb from '@/firebase/init';
import moment from 'moment';

export default {
  name: 'chat',
  props: ['name']

}

</script>
