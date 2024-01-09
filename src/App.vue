<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import AdminLayout from './layouts/AdminLayout.vue'

</script>

<template>
  <admin-layout>
    <!-- <header>
    
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/about">Link 3</RouterLink>
        </nav>
      </div>
    </header>

    <router-view /> -->
    <router-view />
  </admin-layout>
</template>

<style scoped>

</style>
