<template>
  <div class="container is-fluid">
    <nav class="level is-mobile mt-1 mb-1">
        <!-- Left -->
        <div class="level-left">
          <div class="level-item">
            <h1 class="title">{{ title }}</h1>
          </div>
        </div>

        <!-- Right -->
        <div class="level-right">
          <div class="level-item" v-on:click="onLogout">
            <figure class="image is-32x32">
              <img class="is-rounded" src="https://i.pravatar.cc/32" alt="Avatar">
            </figure>
          </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: {
      type: String,
      default: 'Brainfood'
    }
  },
  methods: {
    onLogout () {
      this.loading = true
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.loading = false
          this.$router.push('login')
        })
    }
  }
}
</script>
