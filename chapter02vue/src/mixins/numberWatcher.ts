
import DefaultNumber from './defaultNumber';

import { mixins } from 'vue-class-component';
export default class NumberWatchers extends mixins(DefaultNumber) {

  /*@Watch('valueNumber')
  onValueNumberChanged(val: number) {
    console.log("oli2");
    this.$emit('input', val);
  }

  @Watch('value', { immediate: true })
  onValueChanged(val: number) {
    console.log("oli3");
    this.valueNumber = val;
  }*/
  
}