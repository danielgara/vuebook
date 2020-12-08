import { Vue }from 'vue-class-component';

export default class DefaultNumber extends Vue {
  valueNumber: number = 0;

  public formattedNumber() {
    return `Your total number is: ${this.valueNumber}`;
  }
}