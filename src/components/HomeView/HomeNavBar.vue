<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const sarchKeyWord = ref('')
const recomendUsers = [
    { avater: 'https://randomuser.me/api/portraits/women/83.jpg', subtitle: '@test', title: 'Jane Smith' },
    { avater: 'https://randomuser.me/api/portraits/women/84.jpg', subtitle: '@makesence', title: 'Mikel Porl' },
    { avater: 'https://randomuser.me/api/portraits/women/85.jpg', subtitle: '@hoikel', title: 'Taiar Sfit' },
]
const trendList = [
    { categoris: '政治', postcounts: '10,000', title: '自民党崩壊' },
    { categoris: 'アニメ', postcounts: '1,000', title: 'アニメ人気ランキング' },
    { categoris: '経済', postcounts: '2,000', title: '利下げ対応の決意' },
    { categoris: '食べ物', postcounts: '15,000', title: '唐揚げとザンギの違い' },
    { categoris: 'ビジネス', postcounts: '54,000', title: '自己啓発本' },
    { categoris: '札幌', postcounts: '10,800', title: '餃子の美味しいお店' },
]
const onEnterPressed = () => {
    alert(['検索キーワード', sarchKeyWord.value])
}
</script>

<template>
    <v-navigation-drawer location="right" class="rightNavBar">
        <section class="recomendSection">
            <v-list>
                <v-text-field
                    v-model="sarchKeyWord"
                    variant="outlined"
                    rounded
                    placeholder="検索"
                    prepend-inner-icon="mdi-magnify"
                    class="sarchInput"
                    @keyup.enter="onEnterPressed"
                />
            
                <v-list-subheader class="sectionTitle">おすすめユーザー</v-list-subheader>
                <div v-for="user, index in recomendUsers" :key="index" class="">
                    <div class="recomendUserList" >
                        <v-list-item :prepend-avatar="user.avater" :subtitle="user.subtitle" :title="user.title" @click="router.push('/profile')" />
                        <v-btn class="follow-btn" variant="outlined">フォロー</v-btn>
                    </div>
                </div>
            <v-list-item>
                <router-link to="/">さらに表示</router-link>
            </v-list-item>
        </v-list>
        </section>

        <section class="trendSection">
            <v-list>
            <v-list-subheader class="sectionTitle">いまどうしてる？</v-list-subheader>
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
        </v-list>
        </section>
    </v-navigation-drawer>
</template>

<style scoped>
.rightNavBar {
    width: 300px !important;
}
.recomendSection {
    padding-bottom: 20px;
    border-radius: 20px;
}
.sectionTitle {
    font-size: 20px;
}
.recomendUserList {
    display: flex;
    justify-content: space-between;
    padding: 0px 5px 10px 5px;
}
.follow-btn {
    border-radius: 20px;
}
.trendList {
    display: flex;
    justify-content: space-between;
    width: auto;
}
.trend-item-icon {
    align-items: start;
}
.sarchInput {
    padding: 10px;
}
</style>