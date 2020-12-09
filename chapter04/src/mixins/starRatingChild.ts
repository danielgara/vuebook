import { Vue, Options } from 'vue-class-component';
@Options({
  inject: {
    starRating: {
      default() {
        console.error('StarRatingInput need to be a child of StarRating');
      },
    },
  }
})
export default class StarRatingChild extends Vue {
}