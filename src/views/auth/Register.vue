<template>
  <main>
    <!-- Register -->
    <div class="container is-fluid">
      <!-- Header -->
      <section class="section header">
        <h1 class="title is-2">Brainfood</h1>
        <h2 class="subtitle is-4">Think about what you eat.</h2>
      </section>

      <!-- Form -->
      <section class="section">
        <form action="" method="POST">
          <!-- Name -->
          <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left">
              <input required class="input" type="text" placeholder="John Doe" v-model.trim="input.name">
              <span class="icon is-small is-left">
                <ion-icon name="person-outline"></ion-icon>
              </span>
            </div>
          </div>

          <!-- Email -->
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input required class="input" type="email" placeholder="john@brainfood.com" v-model.trim="input.email">
              <span class="icon is-small is-left">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
            </div>
          </div>

          <!-- Password -->
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input required class="input" type="password" v-model="input.password">
              <span class="icon is-small is-left">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
            </div>
          </div>

          <!-- Confirm Password -->
          <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control has-icons-left">
              <input required class="input" type="password" v-model="input.password_confirm">
              <span class="icon is-small is-left">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
            </div>
          </div>

          <!-- Error -->
          <div class="field">
          <article class="notification" v-if="error">
            {{ error.message }}
          </article>
          </div>

          <!-- Submit -->
          <div class="field">
            <div class="control">
              <button class="button is-fullwidth is-primary" v-on:click="submit">Submit</button>
            </div>
          </div>
        </form>
      </section>

      <!-- Help -->
      <section class="section has-text-centered is-size-7">
        <router-link to="/login">Already an account? Click here to login.</router-link>
      </section>
    </div>
  </main>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Register',
  data () {
    return {
      error: null,
      input: {
        name: '',
        email: '',
        password: '',
        password_confirm: ''
      }
    }
  },
  methods: {
    submit () {
      firebase.auth()
        .createUserWithEmailAndPassword(this.input.email, this.input.password)
        .then(data => {
          data.user.updateProfile({
            displayName: this.input.name
          })
        }).catch((e) => {
          console.error(e)
          this.error = { ...e }
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
