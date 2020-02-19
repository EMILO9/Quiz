<template>
  <div class="Navigation">
    <button class="navigationButton" @click="prevPage" v-if="$route.path === '/'"><i class="fas fa-arrow-left"></i></button>
    <button class="navigationButton" @click="resetQuiz" v-if="$route.path === '/results'">Reset</button>
    <button class="navigationButton" @click="nextPage" v-if="Page < Questions.length - 1"><i class="fas fa-arrow-right"></i></button>
    <button class="navigationButton" @click="goToResults" v-else>Results</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navigation',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'Questions',
      'Page',
      'selectedAnswers',
      'Products'
    ])
  },
  methods: {
    nextPage () {
      let check = this.Questions[this.Page].Answers.some(Answer => Answer.Selected === true)
      if (check && this.Page < this.Questions.length - 1) this.$store.commit('nextPage')
    },
    prevPage () {
      if (this.Page !== 0) this.$store.commit('prevPage')
    },
    goToResults () {
      let check = this.Questions[this.Page].Answers.some(Answer => Answer.Selected === true)
      let nameCheck = this.selectedAnswers[0].Answer
      let colorCheck = this.selectedAnswers[1].Answer
      let results = this.Products.filter(product => product.Name.includes(nameCheck) && product.Color === colorCheck)
      if (check) this.$store.commit('setMatches', results)
      this.$router.push({ path: '/results' }).catch(err => err)
    },
    resetQuiz () {
      let map = this.Questions.map(x => x.Answers)
      let flatten = Array.prototype.concat.apply([], map)
      for (let Answer of flatten) { Answer.Selected = false }
      this.$store.commit('prevPage')
      this.$router.push({ path: '/' }).catch(err => err)
    }
  }
}
</script>
