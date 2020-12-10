<template>
  <div id="app">
    <navigation-bar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import navigationBar from '@/components/navigationBar.vue';

@Options({
  components: {
    navigationBar
  }
})
export default class App extends Vue {
  /*public mounted() {
    setTimeout(() => {
      this.$router.push({
        name: 'contact',
        params: {
          name: 'Heitor Ribeiro',
          age: 31,
        },
      });
    }, 5000);
  }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
