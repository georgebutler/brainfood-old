<template>
  <section>
    <AppNavbar></AppNavbar>
    <div class="container mx-auto pl-3 pr-3">
      <p>Some text from home.</p>
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
