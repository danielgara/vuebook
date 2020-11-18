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
import { Vue } from 'vue-class-component';

export default class Counter extends Vue {
  valueNumber: number = 0;

  public formattedNumber() {
    return `Your total number is: ${this.valueNumber}`;
  }

  public increase() {
    this.valueNumber += 1;
  }

  public decrease() {
    this.valueNumber -= 1;
  }
}
</script>