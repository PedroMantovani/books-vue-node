<template>
  <nav id="nav">
    <b-navbar variant="light">
      <b-navbar-nav>
        <b-nav-item
          ><router-link to="/"><span>Books</span></router-link></b-nav-item
        >
        <b-nav-item
          ><router-link to="/profile">Profile</router-link></b-nav-item
        >
      </b-navbar-nav>
      <b-button class="right" @click.prevent="logout" variant="link">Log Out</b-button>
    </b-navbar>
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('Login')
        })
        .catch(() => {
        });
    },
  },
};
</script>

<style>
</style>