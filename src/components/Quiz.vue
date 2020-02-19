<template>
  <div class="Quiz">
    <Question :Title="Questions[Page].Title"/>
    <Answer @click.native="selectAnswer(Answer)" v-for="(Answer, index) in Questions[Page].Answers" :Answer="Answer" :key="Answer+index"
    :class="{'answerSelected': Answer.Selected, 'answerDisabled': !checkIfAnswerIsEmpty(Answer)}"/>
  </div>
</template>

<script>
import Question from '../components/Question'
import Answer from '../components/Answer'
import { mapGetters } from 'vuex'
export default {
  name: 'Quiz',
  components: { 'Answer': Answer, 'Question': Question },
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
    selectAnswer (Answer) {
      for (let Answer of this.Questions[this.Page].Answers) {
        Answer.Selected = false
      }
      Answer.Selected = true
      for (let selectedAnswer of this.selectedAnswers) {
        if (selectedAnswer.ID === Answer.ID) this.selectedAnswers.splice(this.selectedAnswers.indexOf(selectedAnswer), 1)
      }
      this.selectedAnswers.push(Answer)
      this.$store.commit('orderSelected')
    },
    checkIfAnswerIsEmpty (Answer) {
      if (this.Page === 0) {
        for (let product of this.Products) {
          if (product.Name.includes(Answer.Answer)) return true
        }
      }
      if (this.Page === 1) {
        for (let product of this.Products) {
          if (product.Name.includes(this.selectedAnswers[0].Answer) && product.Color === Answer.Answer) return true
        }
      }
    }
  }
}
</script>
