<template>
  <main>
    <!-- Login -->
    <div class="container is-fluid">
      <!-- Header -->
      <section class="section header">
        <h1 class="title is-2">Brainfood</h1>
        <h2 class="subtitle is-4">Think about what you eat.</h2>
      </section>

      <!-- Form -->
      <section class="section">
        <form v-on:submit.prevent novalidate>
          <!-- Email -->
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input" type="email" placeholder="john@brainfood.com" required v-bind:class="{'is-danger' : emailError || notFoundError}" v-model.trim="input.email">
              <span class="icon is-small is-left">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
            </div>
            <p class="help is-danger" v-if="notFoundError">
              {{ error.message }}
            </p>
            <p class="help is-danger" v-if="emailError">
              {{ error.message }}
            </p>
          </div>

          <!-- Password -->
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input class="input" type="password" required v-bind:class="{'is-danger' : passwordError}" v-model="input.password">
              <span class="icon is-small is-left">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
            </div>
            <p class="help is-danger" v-if="passwordError">
              {{ error.message }}
            </p>
          </div>

          <!-- Error -->
          <div class="field">
            <div class="control">
              <div class="help is-danger" v-if="requestError">
                {{ error.message }}
              </div>
            </div>
          </div>

          <!-- Submit -->
          <div class="field">
            <div class="control">
              <button class="button is-fullwidth is-primary" v-bind:class="{'is-loading' : loading}" v-on:click="onSubmit">Submit</button>
            </div>
          </div>

          <!-- Logout -->
          <div class="field">
            <div class="control">
              <button class="button is-fullwidth" v-bind:class="{'is-loading' : loading}" v-on:click="onLogout">Logout</button>
            </div>
          </div>
        </form>
      </section>

      <!-- Help -->
      <section class="section has-text-centered is-size-7">
        <router-link to="/register">Don't have an account? Click here to get started.</router-link>
      </section>
    </div>
  </main>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      error: null,
      loading: false,
      input: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    emailError () {
      return (this.error && (this.error.code === 'auth/invalid-email' || this.error.code === 'auth/email-already-in-use'))
    },
    passwordError () {
      return (this.error && (this.error.code === 'auth/weak-password' || this.error.code === 'auth/wrong-password'))
    },
    notFoundError () {
      return (this.error && (this.error.code === 'auth/user-not-found'))
    },
    requestError () {
      return (this.error && (this.error.code === 'auth/too-many-requests'))
    }
  },
  methods: {
    onSubmit () {
      this.loading = true

      firebase.auth()
        .signInWithEmailAndPassword(this.input.email, this.input.password)
        .then(() => {
          this.$router.push({
            path: '/home'
          })
        })
        .finally(() => {
          this.loading = false
        })
        .catch((e) => {
          this.error = e
        })
    },
    onLogout () {
      this.loading = true

      firebase.auth()
        .signOut()
        .finally(() => {
          this.loading = false
        })
        .catch((e) => {
          this.error = e
        })
    }
  }
}
</script>

<style scoped>
  .header {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
</style>
