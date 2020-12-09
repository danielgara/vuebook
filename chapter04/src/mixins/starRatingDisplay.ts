import { Vue, Options } from 'vue-class-component';
@Options({
  props: {
    maxRating: {
      type: Number,
      required: false,
      default: 5,
    },
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
    votes: {
      type: Number,
      required: false,
      default: 0,
    }
  }
})
export default class StarRatingDisplay extends Vue {
}