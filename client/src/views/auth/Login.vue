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
              <input class="input" type="email" placeholder="john@brainfood.com" v-model.trim="input.email">
              <span class="icon is-small is-left">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
            </div>
          </div>

          <!-- Password -->
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input class="input" type="password" v-bind:class="{'is-danger' : authError}" v-model="input.password">
              <span class="icon is-small is-left">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
            </div>
            <p class="help is-danger" v-if="authError">
              {{ error.code }}
            </p>
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
              <button class="button is-fullwidth is-primary" v-bind:class="{'is-loading' : loading}"
                      v-on:click="onSubmit">Submit
              </button>
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
    authError () {
      return (this.error && (this.error.code === 'error/not-authorized'))
    },
    genericError () {
      return (this.error && (this.error.code === 'error/generic'))
    }
  },
  methods: {
    onSubmit () {
      this.loading = true
      this.$store.dispatch('auth/login', {
        email: this.input.email,
        password: this.input.password
      })
        .then(() => {
          this.$router
            .push('/home')
            .catch((e) => {
              console.error(e)
            })
        })
        .catch((e) => {
          this.error = e.response.data
        })
        .finally(() => {
          this.loading = false
        })
    },
    onLogout () {
      this.loading = true
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
