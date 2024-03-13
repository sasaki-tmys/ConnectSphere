
import type { ClientRequest } from 'http';

import type { flattenDiagnosticMessageText } from 'typescript';
<script setup lang="ts">
import { ref } from 'vue'

const tab = ref()

const trendList = [
    { categoris: '政治', postcounts: '10,000', title: '自民党崩壊' },
    { categoris: 'アニメ', postcounts: '1,000', title: 'アニメ人気ランキング' },
    { categoris: '経済', postcounts: '2,000', title: '利下げ対応の決意' },
    { categoris: '食べ物', postcounts: '15,000', title: '唐揚げとザンギの違い' },
    { categoris: 'ビジネス', postcounts: '54,000', title: '自己啓発本' },
    { categoris: '札幌', postcounts: '10,800', title: '餃子の美味しいお店' },
]
</script>

<template>
    <v-container>
        <v-list>
            <section class="sarchSection">
                <v-text-field variant="outlined" rounded placeholder="検索" prepend-inner-icon="mdi-magnify" class="sarchInput" />
                <div class="sarch-icon">
                    <v-btn icon="mdi-cog-outline" flat />
                </div>
            </section>
            <section class="trendSection">
                <v-tabs v-model="tab" grow>
                    <v-tab class="tabs" value="one">For you</v-tab>
                    <v-tab class="tabs" value="two">Trending</v-tab>
                    <v-tab class="tabs" value="three">News</v-tab>
                    <v-tab class="tabs" value="four">Sports</v-tab>
                    <v-tab class="tabs" value="five">Entertainments</v-tab>
                </v-tabs>
                <div  v-for="trend, index in trendList" :key="index" class="trendList">
                    <v-list-item>
                        <v-list-item-subtitle>{{ trend.categoris }}</v-list-item-subtitle>
                        <v-list-item :subtitle="trend.postcounts" :title="trend.title"></v-list-item>
                    </v-list-item>
                    <div class="trend-item-icon">
                        <v-btn icon="mdi-dots-horizontal" variant="text" />
                    </div>
                </div>
                <v-list-item>
                    <router-link to="/">さらに表示</router-link>
                </v-list-item>
            </section>
        </v-list>
    </v-container>
</template>

<style scoped>
.v-container {
    max-width: 900px;
}
.sarchSection {
    display: flex;
}
.sarchInput {
    padding: 0px 10px 0px 10px;
}
.sarch-icon {
    padding: 5px 10px 10px 10px;
}
.sectionTitle {
    font-size: 20px;
}
.recomendSection {
    padding-bottom: 20px;
    border-radius: 20px;
}
.recomendUserList {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
}
.trend-item-icon {
    align-items: start;
}
.trendList {
    padding: 10px 10px 0px 10px;
    display: flex;
    justify-content: space-between;
}
</style>