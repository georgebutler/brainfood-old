<template>
  <main>
    <!-- App Header -->
    <AppHeader title="Pantry"></AppHeader>

    <div class="container is-fluid">
      <!-- Search -->
      <div class="field">
        <p class="control has-icons-left">
          <label>
            <input class="input is-rounded" type="text" placeholder="Search">
            <span class="icon is-left">
              <ion-icon name="search-circle-outline" size="large"></ion-icon>
            </span>
          </label>
        </p>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <ul class="is-left">
          <li class="is-uppercase" v-on:click="changeTab(0)" v-bind:class="{ 'is-active': tab === 0 }">
            <a class="has-text-weight-semibold">
              <span>Collections</span>
            </a>
          </li>
        </ul>
        <ul class="is-right">
          <li class="is-uppercase" v-on:click="changeTab(1)" v-bind:class="{ 'is-active': tab === 1 }">
            <a class="has-text-weight-semibold">
              <span>Nutrition</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Pantry View -->
    <div class="section" v-if="tab === 0">
      <h5 class="title is-5">Select a Collection</h5>

      <div class="select">
        <label>
          <select>
            <option>Default</option>
          </select>
        </label>
      </div>

      <button class="button is-fullwidth is-primary mt-1">New Collection</button>

      <!-- Items -->
      <div class="block">
        <h3 class="title is-5">In this collection</h3>
        <p class="is-size-7">No items in this collection.</p>
      </div>
    </div>

    <!-- Nutrition View -->
    <div class="section" v-if="tab === 1">
        <h3 class="title is-5">Summary</h3>
        <p class="is-size-7">No nutrition information is available at the moment.</p>
    </div>

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

<style lang="css" scoped>
  .select {
    width: 100%;
  }

  select {
    width: 100%;
  }
</style>
