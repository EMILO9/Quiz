import Vue from 'vue'
import Router from 'vue-router'
import Quiz from '@/components/Quiz'
import Results from '@/components/Results'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    }
  ]
})
