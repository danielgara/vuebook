<template>
  <div id="app">
    <!--<MaterialCardBox>
      <template v-slot:header>
        <strong>Card Title</strong><br>
        <span>Card Sub-Title</span>
      </template>
      <template v-slot:media>
        <img src="https://via.placeholder.com/350x150">
      </template>
      <p>Main Section</p>
      <template v-slot:action>
        <button>Action Button</button>
        <button>Action Button</button>
      </template>
    </MaterialCardBox>-->

    <MaterialCardBox
      header="Material Card Header"
      sub-header="Card Sub Header"
      show-media
      show-actions
      img-src="https://picsum.photos/300/200"
    >
      <p>
        <StarRating
          ref="starRating"
        />
      </p>
      <p>
        The path of the righteous man is beset on all sides by the iniquities
        of the selfish and the tyranny of evil men.
      </p>
      <template v-slot:action>
        <MaterialButton
          background-color="#027be3"
          text-color="#fff"
          @click="resetVote"
        >
          Reset
        </MaterialButton>
        <MaterialButton
          background-color="#26a69a"
          text-color="#fff"
          is-flat
          @click="forceVote"
        >
          Rate 5 Stars
        </MaterialButton>
      </template>
    </MaterialCardBox>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import MaterialCardBox from '@/components/MaterialCardBox.vue';
import MaterialButton from '@/components/MaterialButton.vue';
import StarRating from '@/components/StarRating.vue';

@Options({
  components: {
    MaterialCardBox,
    MaterialButton, 
    StarRating
  }
})
export default class App extends Vue {
  public $refs:any;

  public resetVote() {
      this.$refs.starRating.rank = 0;
      this.$refs.starRating.voted = false;
  }

  public forceVote() {
      this.$refs.starRating.rank = 5;
      this.$refs.starRating.voted = true;
    }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
