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
import { Vue, mixins } from 'vue-class-component';
import DefaultNumber from '../mixins/defaultNumber';
import componentMount from '../decorators/componentMount';

@componentMount
export default class Counter extends mixins(DefaultNumber) {

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