<template>
  <div class="starRating">
    <ul>
      <li
        v-for="rate in maxRating"
        :key="rate"
      >
        <i class="material-icons">
          {{ getStarName(rate) }}
        </i>
      </li>
    </ul>
    <span class="rating">
      {{ rating }}
    </span>
    <span
      v-if="votes"
      class="votes"
    >
      ({{ votes }})
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, mixins } from 'vue-class-component';
import StarRatingDisplayMixin from '../mixins/starRatingDisplay';
import StarRatingChildMixin from '../mixins/starRatingChild';
import StarRatingNameMixin from '../mixins/starRatingName';

export default class StarRatingDisplay extends mixins(StarRatingDisplayMixin, StarRatingNameMixin, StarRatingChildMixin) {
  public maxRating:any;
  public votes:any;
}
</script>

<style scoped>
  @import '../assets/css/starRating.css';
  .rating, .votes {
    display: inline-block;
    color: rgba(0,0,0, .65);
    font-size: .75rem;
    margin-left: .4rem;
  }
</style>