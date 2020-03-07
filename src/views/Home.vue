<template>
  <main>
    <AppNavbar></AppNavbar>
    <div class="container is-fluid">
      <!-- Search -->
      <div class="field">
        <p class="control has-icons-left">
          <label>
            <input class="input is-rounded" type="text" placeholder="Search">
          </label>
          <span class="icon is-left">
            <ion-icon name="search-outline"></ion-icon>
          </span>
        </p>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <ul>
          <li class="is-uppercase is-active">
            <a class="has-text-weight-semibold">Discover</a>
          </li>
          <li class="is-uppercase">
            <a class="has-text-weight-semibold">My Pantry</a>
          </li>
          <li class="is-uppercase">
            <a class="has-text-weight-semibold">Add</a>
          </li>
        </ul>
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
