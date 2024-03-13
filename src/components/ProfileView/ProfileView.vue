<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'

interface userDataArgs {
    name: string
    email: string
    accountName: string
    avatar: string
    background: string
    address: string
    useStartDate: string
    contents: string
    currentFollow: string
    currentFollower: string
    postCounts:string
}
const store = useAuthStore()
const tab = ref()
const userData = reactive({} as userDataArgs)


const postItemInfo = reactive([
{
    userName: 'ショッピ〜',
    userAvatar: 'https://randomuser.me/api/portraits/men/82.jpg',
    accountName: '@Ematoron',
    content: 'テストツイート',
    postDate: new Date
  },{
    userName: 'テスト太郎',
    userAvatar: 'https://randomuser.me/api/portraits/women/89.jpg',
    accountName: '@Taro',
    content: 'テストツイート',
    postDate: new Date
  },{
    userName: 'ベガパンク',
    userAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    accountName: '@Dr.vegapank',
    content: 'テストツイート',
    postDate: new Date
  },
])

onMounted(() => {
    Object.assign(userData, store.user)
    console.log(userData)
})
</script>

<template>
    <v-container>
        <div>
            <v-list class="user-list">
                <v-icon icon="mdi-arrow-left" class="user-icon" />
                <v-list-item>
                    <v-list-item-title class="user-title">{{ userData.name }}</v-list-item-title>
                    <v-list-item-subtitle class="header-subtitle">{{ userData.postCounts + '件の投稿' }}</v-list-item-subtitle>
                </v-list-item>
            </v-list>
        </div>
        <div>
            <v-list class="pa-0">
                <v-img :src="userData.background" height="200px" cover />
                <v-list-item-media class="profile-header">
                    <div>
                        <v-avatar class="user-avatar" size="150" :image="userData.avatar" cover />
                    </div>
                    <div class="edit-profile">
                        <v-btn variant="outlined" rounded> プロフィールを編集 </v-btn>
                    </div>
                </v-list-item-media>
                <v-list-item>
                    <v-list-item-title class="user-title">{{ userData.name }}</v-list-item-title>
                    <v-list-item-subtitle class="user-subtitle">{{ userData.accountName }}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <span>{{ userData.contents }}</span>
                </v-list-item>
                <v-list-item>
                    <v-list-item-subtitle>
                        <v-icon icon="mdi-map-marker-outline" />
                        <span class="user-address">{{ userData.address }}</span>
                        <v-icon icon="mdi-calendar" />
                        <span>{{ userData.useStartDate + 'からTwitterを利用しています' }}</span>
                    </v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                    <v-btn variant="text">{{ userData.currentFollow + ' フォロー中' }}</v-btn>
                    <v-btn variant="text">{{ userData.currentFollower + ' フォロワー' }}</v-btn>
                </v-list-item>
            </v-list>
        </div>
        <div>
            <v-list>
                <v-tabs v-model="tab" class="profile-tabs" grow>
                    <v-tab class="tabs" value="one">投稿</v-tab>
                    <v-tab class="tabs" value="two">返信</v-tab>
                    <v-tab class="tabs" value="three">ハイライト</v-tab>
                    <v-tab class="tabs" value="four">メディア</v-tab>
                    <v-tab class="tabs" value="five">いいね</v-tab>
                </v-tabs>

                <v-card class="tweet" flat v-for="postItem, index in postItemInfo" :key="index">
            <v-card-item>
            <div class="post-item">
                <div class="post-item">
                <v-card-title>
                    <v-avatar size="34" class="mr-2" :image="postItem.userAvatar" />
                    <span class="user-name">{{ postItem.userName }}</span>
                </v-card-title>
                <v-card-subtitle>
                    <div class="post-item-info">
                    <div class="post-item-detail">
                        <div class="account-name">{{ postItem.accountName }}</div>
                        <div class="post-date">{{ '9時間' }}</div>
                    </div>
                    </div>
                </v-card-subtitle>
                </div>
                <v-btn flat icon="mdi-dots-horizontal" class="setting-button" />
            </div>
            <v-card-text>
                {{ postItem.content }}
            </v-card-text>
            </v-card-item>
            <v-card-actions>
            <v-btn icon>
                <v-icon>mdi-chat-outline</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-transfer</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-bookmark-outline</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>
            </v-card-actions>
        </v-card>
            </v-list>
        </div>
        
    </v-container>
</template>

<style scoped>
.user-title {
    font-weight: 700;
    font-size: 20px;
}
.header-subtitle {
    padding: 5px 0px 0px 10px;
    font-size: 12px;
}
.user-subtitle {
    padding-top: 5px;
}
.v-container {
    max-width: 900px;
}
.user-list {
    display: flex;
}
.user-icon {
    align-self: center;
    padding: 0px 30px 0px 30px;
}
.user-avatar {
    margin: -75px 0px 0px 50px;
}
.profile-header {
    display: flex;
    justify-content: space-between;
}
.edit-profile {
    padding: 20px 30px 0px 0px;
}
.profile-tabs {
    justify-content: space-between;
}
.post-item {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
}
.post-item-info {
    gap: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.user-name {
    font-weight: bold;
}
.tweet {
    border-bottom: 1px solid #666666;
}
.post-item-detail {
    display: flex;
    gap: 10px;
}
.setting-button {
    justify-self: end;
}
.user-address {
    padding-right: 30px;
}
</style>