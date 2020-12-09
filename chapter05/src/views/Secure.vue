<template>
  <div class="secure">
    <h1>This is an secure page</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Home extends Vue {

  public beforeRouteEnter(to:any, from:any, next:any) {
    const securePassword = 'vuejs';
    const userPassword = prompt('What is the password?');
    if (userPassword === securePassword) {
      console.log("bien");
      next();
    } else if (!userPassword) {
      console.log("mal");
      next('/');
    }
  }

  public beforeRouteLeave(to:any, from:any, next:any) {
    alert('Bye!');
    next();
  }
}
</script>