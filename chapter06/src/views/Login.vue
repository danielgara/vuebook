<template>
  <div class="container">
    <h3>
        User Login
    </h3>

    <input
        label="Username"
        placeholder="Username or e-mail"
        v-model="username"
        />
    
    <input
        label="Password"
        type="password"
        placeholder="Your password"
        v-model="password"
        />

        <button @click="userSignIn"
        >
        Sign-in
        </button>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data: () => ({
      username: '',
      password: '',
      error: false,
    }),
    methods: {
      userSignIn() {
        if (this.username && this.password) {
          window.sessionStorage.setItem('auth',
            window.btoa(JSON.stringify({
                username: this.username
              })
            )
          );
          this.error = false;
          this.$router.replace('/');
        }
        this.error = true;
        return false;
      },
    }
  };
</script>
<style scoped>
  .container {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
  .vs-input {
    margin: 5px;
  }
</style>