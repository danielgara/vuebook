<template>
  <div>
    <component
      :is="starComponent"
      :max-rating="maxRating"
      :rating="rating || rank"
      :votes="votes"
      @final-vote="vote"
    > Rate this Place
    </component>
    <!--<StarRatingInput
      v-if="!voted"
      :max-rating="maxRating"
      @final-vote="vote"
    >
      Rate this Place
    </StarRatingInput>
    <StarRatingDisplay
      v-else
      :max-rating="maxRating"
      :rating="rating || rank"
      :votes="votes"
    />-->
  </div>
</template>

<script lang="ts">
import { Vue, Options, mixins } from 'vue-class-component';
import StarRatingInput from '@/components/StarRatingInput.vue';
import StarRatingDisplay from '@/components/StarRatingDisplay.vue';
import StarRatingDisplayMixin from '../mixins/starRatingDisplay';

@Options({
components: {
    StarRatingInput,
    StarRatingDisplay
  },
  provide: {
    starRating: true,
  }
})
export default class StarRating extends mixins(StarRatingDisplayMixin) {
  public maxRating:any;
  public votes:any;
  public rating:any;
  public rank:number = 0;
  public voted:boolean = false;

  public get starComponent(){
    if(!this.voted){
      return StarRatingInput;
    }else{
      return StarRatingDisplay;
    }
  }

  public vote(rank:any) {
    this.rank = rank;
    this.voted = true;
  }
}
</script>