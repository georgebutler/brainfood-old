<template>
  <div class="container is-fluid is-fixed-bottom">
    <nav class="level is-mobile mt-1 mb-1">
      <div class="level-item">
        <div class="icon is-large">
          <ios-search-icon w="2rem" h="2rem"/>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style lang="css" scoped>
  .is-fixed-bottom {
    position: absolute;
    bottom: 0;
  }
</style>
