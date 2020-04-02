<template>
  <main>
    <!-- App Header -->
    <AppHeader title="Scan"></AppHeader>

    <!-- App Navbar -->
    <AppNavbar></AppNavbar>
  </main>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppNavbar from '../components/AppNavbar'

export default {
  name: 'Scan',
  components: {
    AppHeader,
    AppNavbar
  }
}
</script>
