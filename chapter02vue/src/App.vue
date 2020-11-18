<template>
  <div id="app">
    <Counter />
  </div>
  <!--
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />-->
</template>


<!--

<script lang="ts">
import { Vue } from 'vue-class-component';
import Counter from './components/Counter.vue';

export default class App extends Vue {
  static components = {
    Counter
  }
}
</script>

<script>
import Counter from '@/components/Counter.vue';
export default{
  data: function(){
    return {
    }
  },
  components: {
    Counter
  },
}
</script>
-->
<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Counter from '@/components/Counter.vue';

@Options({
  components: {
    Counter
  }
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
