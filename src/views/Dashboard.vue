<template>
  <main>
    <AppNavbar></AppNavbar>
    <div class="container is-fluid">
      <!-- Search -->
      <div class="field">
        <p class="control has-icons-left">
          <label>
            <input class="input is-rounded" type="text" placeholder="Search">
            <span class="icon is-left">
              <ios-search-icon />
            </span>
          </label>
        </p>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <ul class="is-left">
          <li class="is-uppercase is-active">
            <a class="has-text-weight-semibold">
              <span>Discover</span>
            </a>
          </li>
          <li class="is-uppercase">
            <a class="has-text-weight-semibold">
              <span>My Pantry</span>
            </a>
          </li>
        </ul>
        <ul class="is-right">
          <li class="is-uppercase">
            <a class="has-text-weight-semibold">
              <span>Add</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Pantry Quick-View -->
    <div class="section">
      <h3 class="title is-5">Get Started</h3>
      <p>RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR</p>
    </div>
  </main>
</template>

<script>
import AppNavbar from '../components/AppNavbar'

export default {
  name: 'Dashboard',
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
