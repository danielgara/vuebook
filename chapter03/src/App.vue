<template>
  <div id='app'>
    <CurrentTime class='col-4' />
    <TaskInput class='col-6' @add-task='addNewTask' />
    <div class='col-12'>
      <div class='cardBox'>
        <div class='container'>
          <h2>My Tasks</h2>
          <ul class='taskList'>
            <li v-for='(taskItem, index) in displayList' :key='`${index}_${Math.random()}`'>
              <input type='checkbox'
                :checked='!!taskItem.finishedAt'
                @input='changeStatus(taskItem.id)'
              />
              #{{ taskItem.id }} - {{ taskItem.task }}
              <span v-if='taskItem.finishedAt'>|
                Done at:
                {{ formatDate(taskItem.finishedAt) }}</span>
            </li>
          </ul>
          Computed example {{ name }}
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
  }
})
export default class App extends Vue {
  public taskList:any = [];
  public firstName:string = "Daniel";
  public lastName:string = "Correa";

  public addNewTask(task:any) {
    this.taskList.push({
      task,
      createdAt: Date.now(),
      finishedAt: undefined
    });
  }

  public get displayList(){ //computed property in vue-class-style
    return this.sortedList;
  }

  public get name(){ //computed property in vue-class-style
    return this.firstName + " " + this.lastName;
  }

  public get baseList() {
    return [...this.taskList]
      .map((t, index) => ({
        ...t,
        id: index + 1,
      }));
  }
  
  public get filteredList() {
    return [...this.baseList]
      .filter((t) => !t.finishedAt);
  }
  public get sortedList() {
    return [...this.filteredList]
      .sort((a, b) => b.id - a.id);
  }

  public changeStatus(taskId:number) {
    const task = this.taskList[taskId-1];
    if (task.finishedAt) {
      task.finishedAt = undefined;
    } else {
      task.finishedAt = Date.now();
    }
  }

  public formatDate(value:any) {
    if (!value) return '';
    if (typeof value !== 'number') return value;
    const browserLocale = navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
    const intlDateTime = new Intl.DateTimeFormat(
      browserLocale,
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      },
    );
    return intlDateTime.format(new Date(value));
  }
}
</script>

<style scoped>
  .taskList li{
    text-align: left;
  }
</style>
