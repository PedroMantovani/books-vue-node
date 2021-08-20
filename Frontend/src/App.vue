<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  beforeMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace("Login")
      } else if (this.$router.path == "Login" || this.$router.path == "Register") {
        this.$router.replace("/");
      }
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.close {
  border: 0 !important;
  background: transparent !important;
}
</style>
