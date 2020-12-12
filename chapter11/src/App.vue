  
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <input
      v-model="inputMask"
      v-input-mask="'##-###-###'"
      type="text"
    >
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

export default class App extends Vue {
  public $store:any;
  public amount:number = 10;
  public inputMask:any = "";

  public mounted(){
    console.log( this.$store.state);
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
