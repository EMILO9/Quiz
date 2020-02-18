<template>
  <div class="Navigation">
    <button class="navigationButton" @click="prevPage"><i class="fas fa-arrow-left"></i></button>
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
      if (check && this.Page < this.Questions.length - 1) this.$store.commit('nextPage'); console.log(this.Page + 1)
    },
    prevPage () {
      if (this.Page !== 0) this.$store.commit('prevPage')
    },
    goToResults () {
      let check = this.Questions[this.Page].Answers.some(Answer => Answer.Selected === true)
      let nameCheck = this.selectedAnswers[0].Answer
      let colorCheck = this.selectedAnswers[1].Answer
      let results = this.Products.filter(product => product.Name.includes(nameCheck) && product.Color === colorCheck)
      if (check) console.log(results); console.log('Should route to the results page to show all the products.')
    }
  }
}
</script>
