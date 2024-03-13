<script setup lang="ts">
import PostForm from '@/components/CreatePostView/PostForm.vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
const store = useAuthStore()
const router = useRouter()
import { ref } from 'vue'

const dialog = ref(false)

const listItem = [
    { icon: 'mdi-home', title: 'ホーム', path: '/'},
    { icon: 'mdi-magnify', title: '検索', path: '/explore' },
    // { icon: 'mdi-bell', title: '通知', path: '/notifications' },
    // { icon: 'mdi-email', title: 'メッセージ', path: '/messages' },
    // { icon: 'mdi-note-text', title: 'リスト', path: '/lists' },
    // { icon: 'mdi-bookmark', title: 'ブックマーク', path: '/bookmarks' },
    { icon: 'mdi-account', title: 'プロフィール', path: '/profile' }
]
const logout = () => {
    const sucess = store.logout()
    if (sucess) {
        router.push('/login')
    } else {
        alert(['ログアウトできませんでした'])
    }
}
</script>
<template>
    <v-navigation-drawer class="globalNavBar">
        <div>
            <v-list nav v-for="(item, index) in listItem" :key="index">
                <v-list-item :prepend-icon="item.icon" :title="item.title" @click="router.push(item.path)" class="globalItems" />
            </v-list>
            <v-list-item class="postButton">
                <PostForm title="黒歴史を増やす" />
            </v-list-item>
        </div>
        <v-divider />
        <div>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-list-item
                    @click="dialog = true"
                    lines="two"
                    :prepend-avatar="store.user?.avatar"
                    :title="store.user?.name"
                    :subtitle="store.user?.accountName"
                    class="accountInfo"
                    append-icon="mdi-dots-horizontal"
                    v-bind="props"
                    />
                </template>
                <v-list>
                    <v-list-item>新規のアカウントを追加</v-list-item>
                    <v-list-item @click="logout">@Ematoronからログアウト</v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-navigation-drawer>
    <template>
    <!-- <v-dialog v-model="dialog" class="account-dialog">
        <v-card>
            <v-card-title hover>
                <span>新規のアカウントを追加</span>
            </v-card-title>
            <v-card-title>
                <span class="dialog-content">@Ematoronからログアウト</span>
            </v-card-title>
        </v-card>
    </v-dialog> -->
</template>
</template>

<style scoped>
.globalNavBar {
    width: 300px !important;
    display: flex;
}
.globalItems {
    border-radius: 40px;
}
.postButton {
    padding-bottom: 10px;
}
.accountInfo {
    margin: 10px;
    border-radius: 40px;

}
.railButton {
    margin: 8px 0px 8px 0px;
}
.account-dialog {
    width: 400px;
}
</style>