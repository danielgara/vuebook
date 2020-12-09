import { Vue, Options } from 'vue-class-component';
@Options({
  props: {
    maxRating: {
      type: Number,
      required: false,
      default: 5,
    }
  }
})
export default class StarRatingBase extends Vue {
}