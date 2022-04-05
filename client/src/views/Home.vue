<template>
<div>
      <v-card class="pa-5">
  <v-text-field
  v-model="search"
      label="serch domain"
      hide-details="auto"
    ></v-text-field>
    <v-btn  class="ma-5" @click = "fetchData">fetch</v-btn>
      </v-card>
            <v-card>
        <v-list>
          <comapny-card  v-for="(company, index) in companies" :key="index" :company="company"/> 
        </v-list>
      </v-card>
</div></template>
<script>
import ComapnyCard from '../components/CompanyCard.vue';

export default {
  name: 'Home',

  components: {
    ComapnyCard,
  },

  methods: {
    fetchData(){
      this.$store.dispatch('fetchComapny', this.search)
    }
  },
  computed:{
        companies() {
            return this.$store.getters.companies;
        }
  },

  data: () => ({
    search : ""
  }),
};
</script>
