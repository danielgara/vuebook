<template>
  <div>
    <fieldset>
      <legend>{{ formattedNumber() }}</legend>
      <button @click="increase">
        Increase
      </button><button @click="decrease">
        Decrease
      </button>
    </fieldset>
  </div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component';
import numberWatcher from '../mixins/numberWatcher';
import componentMount from '../decorators/componentMount';

@componentMount
export default class Counter extends mixins(numberWatcher) {

  public debug:boolean = true;
  public name:string = "CounterComponent";
  
  increase() {
    this.valueNumber += 1;
  }

  decrease() {
    this.valueNumber -= 1;
  }
}
</script>