import { Vue, Options } from 'vue-class-component';
@Options({
  props: ['modelValue'],
})
export default class DefaultNumber extends Vue {
  public valueNumber:number = 10;
  public modelValue:any;

  public beforeMount(){
    this.valueNumber = this.modelValue;
  }

  public formattedNumber() {
    return `Your total number is: ${this.valueNumber}`;
  }
  
  /*@Watch('valueNumber')
  onValueNumberChanged(val: number) {
    console.log("oli2");
    this.$emit('input', val);
  }

  @Watch('modelValue', { immediate: true })
  onValueChanged(val: number) {
    console.log("oli3");
    this.valueNumber = val;
  }*/
}