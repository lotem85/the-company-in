<template lang="html">
  <v-list-item>
      <v-list-item-avatar v-if = "company.logo">
            <v-img :src="company.logo"></v-img>
          </v-list-item-avatar>
           <v-list-item-content>
             <p v-if="company.name"> {{company.name}} </p>
             {{company.type}}
          </v-list-item-content>
              <v-list-item-action>
          <v-btn icon @click"clickCompany">
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
  </v-list-item>
</template>

<script lang="js">

  export default  {
    name: 'company-view',
    props: {
      'company' : Object
      },
    data () {
      return {}
    },
    methods: {
      clickCompany(){
    }
    },
    computed: {

    }
}


</script>

<style scoped >

</style>
