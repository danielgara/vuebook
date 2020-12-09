<template>
<div id="app">
    <h3>Response</h3>
    <pre>{{ response }}</pre>
  <hr/>
  <h1> Create / Update User </h1>
  <label for="userData">
    User JSON:
    <textarea
      id="userData"
      v-model="userData"
      rows="10"
      cols="40"
      style="display: block;"
    ></textarea>
  </label>
  <button
    style="margin: 20px;"
    @click="createUser(JSON.parse(userData))"
  >
    Create User
  </button>
  <button
    style="margin: 20px;"
    @click="updateUser(JSON.parse(userData))"
  >
    Update User
  </button>
  <hr/>
  <h1> Delete User </h1>
  <label for="userData">
    User Id:
    <input type="number" step="1" v-model="userId">
  </label>
  <button
    style="margin: 20px;"
    @click="deleteUser(userId)"
  >
    Delete User
  </button>
  <!--<RandomCat />-->
</div>
</template>

<script>
import {
  getHttp,
  postHttp,
  patchHttp,
  deleteHttp,
} from './http/fetchApi';

/*import RandomCat from './components/RandomCat.vue';
import httpMethods from './http/fetchApi';*/
export default {
  name: 'app',
  /*components: {
    RandomCat
  },
  methods: {
    ...httpMethods,
  },*/
  async beforeMount() {
    await this.getAllUsers();
  },
  methods: {
    async getAllUsers() {
      this.response = await getHttp(`${window.location.href}api/users`);
    },
    async createUser(data) {
      await postHttp(`${window.location.href}api/users`, { data });
      await this.getAllUsers();
    },
    async updateUser(data) {
      await patchHttp(`${window.location.href}api/users/${data.id}`, { data });
      await this.getAllUsers();
    },
    async deleteUser(id) {
      await deleteHttp(`${window.location.href}api/users/${id}`, {}, 'text');
      await this.getAllUsers();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
