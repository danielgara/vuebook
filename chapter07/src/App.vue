<template>
  <div id="app">
    <h1>{{ counter }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class App extends Vue {
  public $store:any;

  public get counter(){
     return this.$store.state.counter;
  }

  public increment() {
    this.$store.dispatch('increment');
  }

  public decrement() {
    this.$store.dispatch('decrement');
  }
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
