<template>
  <main>
    <!-- App Header -->
    <AppHeader title="Home"></AppHeader>

    <!-- App Navbar -->
    <AppNavbar></AppNavbar>
  </main>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppNavbar from '../components/AppNavbar'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppNavbar
  }
}
</script>
