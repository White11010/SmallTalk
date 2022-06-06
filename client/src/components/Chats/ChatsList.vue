<template>
<div class="chats__list">
  <chats-item
    v-for="chat in 20"
  ></chats-item>
</div>
</template>

<script setup>
import ChatsItem from "@/components/Chats/ChatsItem"
</script>

<style scoped>
.chats__list {
  height: calc(100vh - 174px);
  overflow-y: scroll;
}
</style>