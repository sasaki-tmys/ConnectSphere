<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
const store = useAuthStore()

const tab = ref()
const contents = ref('')

const onSubmit = () => {
    console.log('Click Cubmit!!')
}

</script>

<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <v-card flat class="post-item-card">
        <v-tabs v-model="tab" grow>
            <v-tab class="tabs" value="one">おすすめ</v-tab>
            <v-tab class="tabs" value="two">フォロー中</v-tab>
            <v-tab class="tabs" value="three">Vue.js</v-tab>
            <div>
                <v-btn icon="mdi-cog" flat/>
            </div>
        </v-tabs>
            <v-col cols="12">
                <v-card flat>
                    <v-row class="post-item-row">
                        <v-col cols="auto">
                            <v-avatar :image="store.user?.avatar" />
                        </v-col>
                        <v-col>
                            <v-textarea
                            v-model="contents"
                            placeholder="いまどうしてる？"
                            rows="1"
                            variant="underlined"
                            class="tweet-textarea"
                            auto-grow
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row class="post-item-row action-icons">
                        <v-col class="action-icons-inner">
                            <v-btn icon="mdi-image-outline" flat />
                            <v-btn icon flat>
                                <span class="material-symbols-outlined">gif_box</span>
                            </v-btn>
                            <v-btn icon="mdi-chart-bar" flat />
                            <v-btn icon="mdi-emoticon-happy-outline" flat />
                            <v-btn icon="mdi-map-marker-outline" flat />
                        </v-col>
                        <v-col cols="auto">
                            <v-btn class="post-btn" :class="{postBtnActive : contents !== ''}" flat @click="onSubmit" :disabled="contents?false:true">黒歴史を増やす</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
    </v-card>
</template>

<style scoped>
.post-item-card {
    margin-bottom: 10px;
}
.post-item-row {
    padding: 0px 10px;
    align-items: center;
}
.tabs-item {
    justify-items: center;
}
.tabs {
    gap: 20px;
}
.action-icons-inner > .v-btn {
    color: #1DA1F2;
}

.post-btn {
    border-radius: 20px;
}
.postBtnActive {
    background-color: #1DA1F2;;
    color: blueviolet;
}

</style>
