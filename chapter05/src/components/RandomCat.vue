<template>
<div>
  <img
    v-if="kittyImage"
    alt="Meow!"
    :src="kittyImage"
    style="width: 300px;"
  >
  <p v-else style="text-align: center">
    <i class="material-icons">
      cached
    </i>
  </p><br /><br />
  <button @click="newCatImage">Cat Image</button>
  <button @click="newCatGif">Cat Gif</button>
</div>
</template>

<script>
import { getHttp } from '../http/fetchApi';
export default {
  name: 'RandomCat',
  async beforeMount() {
    await this.newCatImage();
  },
  data: () => ({
    kittyImage: '',
  }),
  methods: {
    async getImage(url) {
      return URL.createObjectURL(await getHttp(url, 'blob'));
    },
    async newCatImage() {
      this.kittyImage = await this.getImage('https://cataas.com/cat');
    },
    async newCatGif() {
      this.kittyImage = await this.getImage('https://cataas.com/cat/gif');
    },
  },
};
</script>
<style>
  body {
    font-size: 14px;
  }
</style>