<script setup lang="ts">
defineProps({
    title: String,

})
</script>
<template>
    <v-dialog activator="parent" max-width="500">
        <template #[`activator`]="{ props }">
            <v-btn flat class="postButtonInner" v-bind="props" :text="title"/>
        </template>
            <template #[`default`]="{ isActive }">
            <v-card rounded="lg">
                <v-card-title class="d-flex justify-space-between align-center">
                <div class="text-h5 text-medium-emphasis ps-2">
                    投稿内容
                </div>
                <v-btn
                    icon="mdi-close"
                    variant="text"
                    @click="isActive.value = false"
                ></v-btn>
                </v-card-title>
                <v-card-text>
                <v-textarea
                    :counter="140"
                    placeholder="いまどうしてる？"
                    variant="underlined"
                    auto-grow
                    persistent-counter
                ></v-textarea>
                </v-card-text>
                <v-divider class="mt-2"></v-divider>
                <v-card-actions class="my-2 d-flex justify-end">
                    <v-row class="post-item-row action-icons">
                        <v-col class="action-icons-inner">
                            <v-btn icon="mdi-image" flat />
                            <v-btn icon="mdi-chart-bar" flat />
                            <v-btn icon="mdi-emoticon-happy-outline" flat />
                            <v-btn icon="mdi-map-marker" flat />
                        </v-col>
                        <v-col cols="auto">
                            <v-btn
                                rounded="xl"
                                text="Cancel"
                                @click="isActive.value = false"
                                variant="outlined"
                            ></v-btn>
                        </v-col>
                        <v-col cols="auto">
                            <v-btn
                            class="post-btn"
                            rounded="xl"
                            text="Post"
                            variant="flat"
                            @click="isActive.value = false"
                        ></v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<style scoped>
.postButtonInner {
    border-radius: 20px;
    width: 100%;
    background: #1DA1F2;
    background-color: none;
    color: blueviolet;
}
.post-item-row {
    padding: 0px 10px;
    align-items: center;
}
.action-icons-inner > .v-btn {
    color: #1DA1F2;
}
.post-btn {
    border-radius: 20px;
    background-color: #1DA1F2;;
    color: blueviolet;
}

</style>