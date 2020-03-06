<template>
  <main>
    <AppNavbar></AppNavbar>
    <div class="container is-fluid">
      <div class="field">
        <p class="control has-icons-left">
          <input class="input is-rounded" type="text" placeholder="Search">
          <span class="icon is-left">
            <ion-icon name="search-outline"></ion-icon>
          </span>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import AppNavbar from '../components/AppNavbar'

export default {
  name: 'Home',
  components: {
    AppNavbar
  },
  data: function () {
    return {
      tab: 0
    }
  }
}
</script>
