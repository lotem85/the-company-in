<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Companies Data</h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    
    <v-main>
            <home/>

              </v-main>

  </v-app>
</template>
<script>
import Home from './views/Home.vue';

export default {
  name: 'App',

  components: {
    Home
  },

  methods: {

  },
  computed:{

  },
};
</script>
