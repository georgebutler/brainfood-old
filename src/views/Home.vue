<template>
  <section>
    <AppNavbar></AppNavbar>

    <!-- Search -->
    <div class="container mx-auto pl-3 pr-3">
      <input class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight" type="text" placeholder="Search by ingredient or dish name"/>
    </div>

    <!-- Tabs -->
    <div class="container mx-auto pl-3 pr-3">
      <div class="flex">
        <div class="mt-3 pt-3 pb-3 flex-grow">
          <button class="font-semibold uppercase focus:outline-none" v-bind:class="{ 'text-primary': tab === 0 }" v-on:click="changeTab(0)">Discover</button>
        </div>
        <div class="mt-3 pt-3 pb-3 flex-grow">
          <button class="font-semibold uppercase focus:outline-none" v-bind:class="{ 'text-primary': tab === 1 }" v-on:click="changeTab(1)">My Food</button>
        </div>
        <div class="font-semibold uppercase mt-3 pt-3 pb-3 flex-grow text-right">
          <button><ion-icon name="add-outline"></ion-icon></button>
        </div>
      </div>
    </div>
  </section>
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
  },
  methods: {
    changeTab (num) {
      this.tab = num
    }
  }
}
</script>
