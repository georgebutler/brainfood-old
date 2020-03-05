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
        <div class="font-semibold uppercase mt-3 pt-3 pb-3 flex-grow">Discover</div>
        <div class="font-semibold uppercase mt-3 pt-3 pb-3 flex-grow">Collection</div>
        <div class="font-semibold uppercase mt-3 pt-3 pb-3 flex-grow text-right">
          <ion-icon name="add-outline"></ion-icon>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'

export default {
  name: 'Home',
  components: {
    AppNavbar
  }
}
</script>
