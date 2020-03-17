<template>
  <div class="container is-fluid is-fixed-bottom">
    <nav class="level is-mobile mt-1 mb-1">
      <!-- Home -->
      <div class="level-item has-text-centered">
        <router-link to="/home">
          <div class="title">
            <div class="icon is-primary is-large">
              <ion-icon name="grid-outline" size="large"></ion-icon>
            </div>
          </div>
          <p class="heading">Home</p>
        </router-link>
      </div>

      <!-- Dashboard -->
      <div class="level-item has-text-centered">
        <router-link to="/dashboard">
          <div class="title">
            <div class="icon is-primary is-large">
              <ion-icon name="people-outline" size="large"></ion-icon>
            </div>
          </div>
          <p class="heading">Dashboard</p>
        </router-link>
      </div>

      <!-- Pantry -->
      <div class="level-item has-text-centered">
        <router-link to="/">
          <div class="title">
            <div class="icon is-primary is-large">
              <ion-icon name="basket-outline" size="large"></ion-icon>
            </div>
          </div>
          <p class="heading">Pantry</p>
        </router-link>
      </div>

      <!-- Scan -->
      <div class="level-item has-text-centered">
        <router-link to="/scan">
          <div class="title">
            <div class="icon is-primary is-large">
              <ion-icon name="camera-outline" size="large"></ion-icon>
            </div>
          </div>
          <p class="heading">Scan</p>
        </router-link>
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
