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
        <form v-on:submit.prevent novalidate>
          <!-- Name -->
          <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left">
              <input class="input" type="text" required placeholder="John Doe" v-model.trim="input.name">
              <span class="icon is-small is-left">
                <ion-icon name="person-outline"></ion-icon>
              </span>
            </div>
          </div>

          <!-- Email -->
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input class="input" type="email" required placeholder="john@brainfood.com" v-bind:class="{'is-danger' : authError || emailError}" v-model.trim="input.email">
              <span class="icon is-small is-left">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
            </div>
            <p class="help is-danger" v-if="authError || emailError">
              {{ error.code }}
            </p>
          </div>

          <!-- Password -->
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input class="input" type="password" required v-bind:class="{'is-danger' : authError}" v-model="input.password">
              <span class="icon is-small is-left">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
            </div>
            <p class="help is-danger" v-if="authError">
              {{ error.code }}
            </p>
          </div>

          <!-- Confirm Password -->
          <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control has-icons-left">
              <input class="input" type="password" required v-model="input.password_confirm">
              <span class="icon is-small is-left">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
            </div>
          </div>

          <!-- Error -->
          <div class="field">
            <div class="control">
              <div class="help is-danger" v-if="genericError">
                {{ error.code }}
              </div>
            </div>
          </div>

          <!-- Submit -->
          <div class="field">
            <div class="control">
              <button class="button is-fullwidth is-primary" v-bind:class="{'is-loading' : loading}" v-on:click="onSubmit">
                Submit
              </button>
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
export default {
  name: 'Register',
  data () {
    return {
      error: null,
      loading: false,
      input: {
        name: '',
        email: '',
        password: '',
        password_confirm: ''
      }
    }
  },
  computed: {
    authError () {
      return (this.error && (this.error.code === 'error/not-authorized'))
    },
    emailError () {
      return (this.error && (this.error.code === 'error/not-unique'))
    },
    genericError () {
      return (this.error && (this.error.code === 'error/generic'))
    }
  },
  methods: {
    onSubmit (event) {
      this.loading = true
      this.$store.dispatch('auth/register', {
        email: this.input.email,
        password: this.input.password,
        name: this.input.name
      })
        .then(() => {
          this.$router.push({ path: '/home' })
        })
        .catch((e) => {
          this.error = e.response.data
        })
        .finally(() => {
          this.loading = false
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
