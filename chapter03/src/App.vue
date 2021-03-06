<template>
  <div id='app'>
    <CurrentTime class='col-4' />
    <TaskInput class='col-6' @add-task='addNewTask' />
    <div class='col-12'>
      <div class='cardBox'>
        <div class="container">
          <h2>My Tasks</h2>
          <hr />
          <div class="col-4">
            <input
              v-model="hideDone"
              type="checkbox"
              id="hideDone"
              name="hideDone"
            />
            <label for="hideDone">
              Hide Done Tasks
            </label>
          </div>
          <div class="col-4">
            <input
              v-model="reverse"
              type="checkbox"
              id="reverse"
              name="reverse"
            />
            <label for="reverse">
              Reverse Order
            </label>
          </div>
          <div class="col-4">
            <input
              v-model="sortById"
              type="checkbox"
              id="sortById"
              name="sortById"
            />
            <label for="sortById">
              Sort By Id
            </label>
          </div>
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
  public hideDone:boolean = false;
  public reverse:boolean = false;
  public sortById:boolean = false;
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
    const taskList = [...this.sortedList];
      return this.reverse
        ? taskList.reverse()
        : taskList;
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
    return this.hideDone
        ? [...this.baseList]
          .filter((t) => !t.finishedAt)
        : [...this.baseList];
  }
  public get sortedList() {
    return [...this.filteredList]
        .sort((a, b) => (
          this.sortById
            ? b.id - a.id
            : ((a.finishedAt || 0) - (b.finishedAt) || 0)
        ));
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
.taskList li {
  list-style: none;
  text-align: left;
  padding: 5px 10px;
  border-bottom: 1px solid rgba(0,0,0,0.15);
}
.taskList li:last-child {
  border-bottom: 0px;
}
.taskList li:nth-child(even){
  background-color: rgba(0,0,0,0.05);
}
@keyframes colorChange {
  from{
    background-color: inherit;
  }
  to{
    background-color: rgba(0, 160, 24, 0.577);
  }
}
.taskList li.taskDone{
  animation: colorChange 1s ease;
  background-color: rgba(0, 160, 24, 0.577);
}
</style>