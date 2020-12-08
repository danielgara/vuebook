<template>
  <div id='app'>
    <CurrentTime class='col-4' />
    <TaskInput class='col-6' @add-task='addNewTask' />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import CurrentTime from './components/CurrentTime.vue';
import TaskInput from './components/TaskInput.vue';

@Options({
  components: {
    CurrentTime,
    TaskInput
  },
})
export default class App extends Vue {
  public addNewTask(task:any) {
    alert(`New task added: ${task}`);
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
