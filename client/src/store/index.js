import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const url = "http://localhost:3000";

const store = new Vuex.Store({
  state: {
    company: [],
    companies :[]
  },
  getters: {
    company: (state) => state.company,
    companies: (state) => state.companies
  },
  mutations: {
    addCompany: (state, company) =>{
      state.companies.push(company);}
  },
  actions: {
    fetchComapny: ({commit}, domain) =>
      axios.get(`/api/company/${domain}`)
        .then(res => commit("addCompany", res.data)),
  },

})


export default store