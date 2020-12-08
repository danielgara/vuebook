<template>
  <div class='cardBox'>
    <div class='container tasker'>
      <strong>My task is:</strong>
      <input type='text' v-model='task' class='taskInput' />
      <button v-on:click='addTask'>Add Task</button>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { required, minLength } from '@vuelidate/validators';

@Options({
  emits: ['add-task'],
  validations: {
    task:{
      required,
      minLength: minLength(5),
    }
  }
})
export default class TaskInput extends Vue {
  public task:string="";
  public $v:any;

  public addTask() {
    this.$v.$touch();
    if (this.$v.$invalid) {
      alert("Datos incorrectos");
    }else{
      this.$emit('add-task', this.task);
      this.task = '';
    }
  }
}
</script>

<style scoped>
  .tasker{
    margin: 20px;
  }
  .tasker .taskInput {
    font-size: 14px;
    margin: 0 10px;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.75);
  }
  .tasker button {
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 3px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }
</style>