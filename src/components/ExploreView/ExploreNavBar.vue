<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const recomendUsers = [
    { avater: 'https://randomuser.me/api/portraits/women/83.jpg', subtitle: '@test', title: 'Jane Smith' },
    { avater: 'https://randomuser.me/api/portraits/women/84.jpg', subtitle: '@makesence', title: 'Mikel Porl' },
    { avater: 'https://randomuser.me/api/portraits/women/85.jpg', subtitle: '@hoikel', title: 'Taiar Sfit' },
]


</script>

<template>
    <v-navigation-drawer location="right" class="rightNavBar">
        <section class="recomendSection">
            <v-list>
            <v-list-subheader class="sectionTitle">おすすめユーザー</v-list-subheader>
            <div v-for="user, index in recomendUsers" :key="index">
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
</style>
