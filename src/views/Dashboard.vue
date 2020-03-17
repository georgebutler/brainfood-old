<template>
  <main>
    <!-- App Header -->
    <AppHeader title="Dashboard"></AppHeader>

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
          <li class="is-uppercase" v-on:click="changeTab(0)" v-bind:class="{ 'is-active': tab === 0 }">
            <a class="has-text-weight-semibold">
              <span>Discover</span>
            </a>
          </li>
          <li class="is-uppercase" v-on:click="changeTab(1)" v-bind:class="{ 'is-active': tab === 1 }">
            <a class="has-text-weight-semibold">
              <span>My Pantry</span>
            </a>
          </li>
        </ul>
        <ul class="is-right">
          <li class="is-uppercase has-text-weight-semibold">
            <a class="has-text-weight-semibold">
              <span>Add</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Discover -->
    <div class="section" v-if="tab === 0">
      <h3 class="title is-5">Discover new recipes</h3>
      <div class="columns is-mobile">
        <div class="column">
          <p class="is-size-7">Once you add items to your pantry, we'll provide some suggestions for you.</p>
        </div>
      </div>
    </div>

    <!-- Pantry Quick-View -->
    <div class="section" v-if="tab === 1">
      <h3 class="title is-5">Get Started</h3>
      <div class="columns is-mobile">
        <div class="column">
          <p class="is-size-7">Once you add items to your pantry, we'll provide some suggestions for you.</p>
        </div>
      </div>

      <div class="box">
        <h3 class="title is-5">Nutrition</h3>
        <div class="columns is-mobile">
          <div class="column">
            <p class="is-size-7">Nutrition information not available at the moment.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- App Navbar -->
    <AppNavbar></AppNavbar>
  </main>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppNavbar from '../components/AppNavbar'

export default {
  name: 'Dashboard',
  components: {
    AppHeader,
    AppNavbar
  },
  data: function () {
    return {
      tab: 0
    }
  },
  methods: {
    changeTab: function (tab) {
      this.tab = tab
    }
  }
}
</script>
