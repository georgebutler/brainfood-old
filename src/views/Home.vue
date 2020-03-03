<template>
  <section>
    <AppNavbar></AppNavbar>
    <div class="container">
      <h1>Home</h1>
      <button class="btn btn-primary">Test Button</button>
    </div>
  </section>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'

export default {
  name: 'Home',
  components: {
    AppNavbar
  }
}
</script>
