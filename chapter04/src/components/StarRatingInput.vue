<template>
  <div class="starRating">
    <span class="rateThis">
      <slot />
    </span>
    <ul>
      <li
        v-for="rate in maxRating"
        :key="rate"
        @mouseenter="updateRating(rate)"
        @click="emitFinalVote(rate)"
        @focus="updateRating(rate)">
        <i class="material-icons">
          {{ getStarName(rate) }}
        </i>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Options, mixins } from 'vue-class-component';
import StarRatingBaseMixin from '../mixins/starRatingBase';

@Options({
  emits: ['final-vote'],
})

export default class StarRatingInput extends mixins(StarRatingBaseMixin) {
  public maxRating:any;
  public rating:number = 0;

  public updateRating(value:any) {
    this.rating = value;
  }

  public emitFinalVote(value:any) {
    this.updateRating(value);
    this.$emit('final-vote', this.rating);
  }

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
</script>

<style scoped>
  @import '../assets/css/starRating.css';
  .starRating {
    justify-content: space-between;
  }
  .starRating * {
    line-height: 1.7rem;
  }
  .starRating .material-icons {
    font-size: 1.6rem !important;
  }
  .rateThis {
    display: inline-block;
    color: rgba(0, 0, 0, .65);
    font-size: 1rem;
  }
</style>