import Vue from 'vue'
import Vuex from 'vuex'
import Questions from '../assets/Questions'
import Products from '../assets/Products'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    Questions: Questions,
    Products: Products,
    Page: 0,
    selectedAnswers: [],
    Matches: []
  },
  getters: {
    Questions: state => state.Questions,
    Products: state => state.Products,
    Page: state => state.Page,
    selectedAnswers: state => state.selectedAnswers,
    Matches: state => state.Matches
  },
  mutations: {
    nextPage (state) { state.Page++ },
    prevPage (state) { state.Page-- },
    orderSelected (state) { state.selectedAnswers = state.selectedAnswers.sort((a, b) => a.ID - b.ID) },
    setMatches (state, payload) { state.Matches = payload }
  }
})
