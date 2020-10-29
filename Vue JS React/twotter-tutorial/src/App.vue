<template>
  <div id='app'>
    @{{ user.username }} - {{ fullname }}
    <strong>Followers: </strong> {{ followers }}
    <button @click="followUser" type="button">Follow</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: 'deltagi',
        firstname: 'Joe',
        lastname: 'Meyer',
        email: 'jmeyer@m.com',
        isAdmin: true
      }
    };
  },
  computed: {
    fullname () {
      return `${this.user.firstname} ${this.user.lastname}`;
    }
  },
  methods: {
    followUser: function() {
      this.followers = this.followers + 1;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
</style>
