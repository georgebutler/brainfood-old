<template>
  <main>
    <!-- App Header -->
    <AppHeader title="Pantry"></AppHeader>

    <!-- App Navbar -->
    <AppNavbar></AppNavbar>
  </main>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppNavbar from '../components/AppNavbar'

export default {
  name: 'Pantry',
  components: {
    AppHeader,
    AppNavbar
  }
}
</script>
