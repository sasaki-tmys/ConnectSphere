<script setup lang="ts">
import Homeview from '@/components/HomeView/HomeView.vue'
import HomeNavBar from '@/components/HomeView/HomeNavBar.vue'
</script>

<template>
  <HomeNavBar />
  <v-main>
    <Homeview />
  </v-main>
</template>

<style>
@media (min-width: 1280px) {
  .v-main {
    padding-right: 300px !important;
    padding-left: 300px !important;
  }
}
</style>