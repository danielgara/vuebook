import { Vue } from 'vue-class-component';
export default class StarRatingName extends Vue {
  public rating:any;
  public getStarName(rate:any) {
    if (rate <= this.rating) {
      return 'star';
    }
    if (Math.fround((rate - this.rating)) < 1) {
      return 'star_half';
    }
    return 'star_border';
  }
}