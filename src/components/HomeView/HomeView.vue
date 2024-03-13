<script setup lang="ts">
import Timelines from '@/components/HomeView/PostTimelines.vue'
import PostItem from '@/components/HomeView/PostItem.vue';
</script>

<template>
    <v-container>
        <PostItem />
        <Timelines />
    </v-container>
</template>

<style scoped>
.v-container {
    max-width: 900px;
}
</style>