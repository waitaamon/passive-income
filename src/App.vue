<template>
  <div>
    <navigation></navigation>

    <div class="container">

        <h3 class="h3 text-center mb-5 pb-5 text-bold">MAKE MONEY ONLINE</h3>

      <router-view></router-view>

    </div>

  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>

</style>
