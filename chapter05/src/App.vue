<template>
  <div id="app">
    <Counter v-model="amount" />
    <CounterByTen v-model="amount" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Counter from '@/components/Counter.vue';
import CounterByTen from '@/components/CounterByTen.vue';

@Options({
  components: {
    Counter,
    CounterByTen
  }
})
export default class App extends Vue {
  public amount:number = 10;
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
