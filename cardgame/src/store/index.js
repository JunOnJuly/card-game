import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {사자: './assets/lion.jpg'},
      {호랑이: './assets/tiger.jpg'},
      {펭귄: './assets/penguin.jpg'},
      {강아지: './assets/dog.jpg'},
      {고양이: './assets/cat.jpg'},
  ],
    selectedCards: {
    },
    solutionCard: [null, null],
  },
  getters: {
  },
  mutations: {
    sampleCards (state) {
      state.selectedCards = _.sampleSize(state.cards, 3)
      state.solutionCard[0] = _.sample(state.selectedCards)
      state.solutionCard[1] = _.indexOf(state.selectedCards, state.solutionCard[0])
    }
  },
  actions: {
  },
  modules: {
  }
})
