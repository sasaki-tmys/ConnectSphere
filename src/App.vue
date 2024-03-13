<script setup lang="ts">
import { computed, ref } from 'vue'
import GlobalNavBar from '@/components/Parts/GlobalNavBar.vue'
import { useAuthStore } from '@/stores/auth'
const store = useAuthStore()

const isLogin = computed(() => store.isLoggedIn)
</script>

<template>
  <v-app>
    <GlobalNavBar v-if="isLogin"/>
    <RouterView />
  </v-app>
</template>

<style scoped></style>

