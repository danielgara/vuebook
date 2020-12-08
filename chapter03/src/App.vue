<template>
  <div id='app'>
    <current-time class='col-4' />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import CurrentTime from './components/CurrentTime.vue';

@Options({
  components: {
    CurrentTime
  },
})
export default class App extends Vue {
  
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
