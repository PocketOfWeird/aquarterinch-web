<template>
  <div id="welcome">
    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
    <button type="button" name="button" v-on:click="signIn">Sign In With Google</button>
  </div>
</template>

<script>
import Firebase from 'firebase/app';
import 'firebase/auth';


export default {
    name: 'welcome',
    data: function() {
        return {
            msg: 'Welcome to A Quarter Inch budget app'
        }
    },
    methods: {
        signIn: function() {
            let provider = new Firebase.auth.GoogleAuthProvider();
            Firebase.auth().signInWithRedirect(provider);
        }
    }
}
</script>

<style scoped>
#welcome {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
