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
          <li class="is-uppercase" v-on:click="changeTab(2)" v-bind:class="{ 'is-active': tab === 2 }">
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
      <h5 class="title is-5">Select a Collection</h5>

      <div class="select">
        <label>
          <select>
            <option>Default</option>
          </select>
        </label>
      </div>

      <button class="button is-fullwidth is-primary mt-1">New Collection</button>

      <!-- Quick Item View -->
      <div class="block">
        <h3 class="title is-5">In this collection</h3>
        <p class="is-size-7">No items in this collection.</p>
      </div>

      <!-- Nutrition -->
      <div class="block">
        <h3 class="title is-5">Nutrition</h3>
        <p class="is-size-7">Nutrition information not available at the moment.</p>
      </div>
    </div>

    <!-- Manual Add -->
    <div class="section" v-if="tab === 2">
      <h3 class="title is-5">Add your item</h3>
      <form>
        <div class="field">
          <div class="control">
            <label class="label">
              Name
              <input class="input" type="text" placeholder="Text input">
            </label>
          </div>
        </div>
      </form>
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

<style lang="css" scoped>
  .select {
    width: 100%;
  }

  select {
    width: 100%;
  }
</style>
