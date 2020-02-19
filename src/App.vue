<template>
  <div id="app">
    <router-view/>
    <Navigation/>
  </div>
</template>

<script>
import Navigation from '../src/components/Navigation'
export default {
  name: 'App',
  components: {
    'Navigation': Navigation
  }
}
</script>
