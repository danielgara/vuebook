<template>
  <div id='app'>
    <CurrentTime class='col-4' />
    <TaskInput class='col-6' @add-task='addNewTask' />
    <div class='col-12'>
      <div class='cardBox'>
        <div class='container'>
          <h2>My Tasks</h2>
          <ul class='taskList'>
            <li v-for='(taskItem, index) in taskList' :key='`${index}_${Math.random()}`'>
              <input type='checkbox'
                :checked='!!taskItem.finishedAt'
                @input='changeStatus(index)'
              />
              {{ taskItem.task }}
              <span v-if='taskItem.finishedAt'>{{ taskItem.finishedAt }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
  public taskList:any = [];

  public addNewTask(task:any) {
    this.taskList.push({
      task,
      createdAt: Date.now(),
      finishedAt: undefined
    });
  }

  public changeStatus(taskIndex:number) {
      const task = this.taskList[taskIndex];
      if (task.finishedAt) {
        task.finishedAt = undefined;
      } else {
        task.finishedAt = Date.now();
      }
    }
}
</script>

<style scoped>
  .taskList li{
    text-align: left;
  }
</style>
