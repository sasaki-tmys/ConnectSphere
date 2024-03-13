<script setup lang="ts">
import { reactive } from 'vue'

const postItemInfo = reactive([
{
    userName: 'ショッピ〜',
    userAvatar: 'https://randomuser.me/api/portraits/women/82.jpg',
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



</script>

<template>
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

  </template>
  
  
  
<style scoped>
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

</style>
