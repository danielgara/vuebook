<template>
  <RandomCat />
</template>

<script>
import RandomCat from './components/RandomCat.vue';
import httpMethods from './http/fetchApi';
export default {
  name: 'app',
  components: {
    RandomCat
  },
  methods: {
    ...httpMethods,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
