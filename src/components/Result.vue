<template>
  <div class="Result">{{Match.Name}} - {{Match.Color}}</div>
</template>

<script>
export default {
  name: 'Result',
  props: ['Match']
}
</script>
