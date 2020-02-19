<template>
  <div class="Results">
      <Result v-for="(Match, index) in Matches" :Match="Match" :key="Match+index"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Result from './Result'
export default {
  name: 'Results',
  components: {'Result': Result},
  computed: {
    ...mapGetters([
      'Matches'
    ])
  }
}
</script>
