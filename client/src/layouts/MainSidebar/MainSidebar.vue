<template>
  <div class="sidebar">
    <chats-search></chats-search>
    <chats-list></chats-list>
  </div>
</template>

<script setup>
import ChatsList from "@/components/Chats/ChatsList"
import ChatsSearch from "@/components/Chats/ChatsSearch"
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: $header-height;
  height: calc(100vh - #{$header-height});
  width: 400px;
  border-right: 1px solid black;
}
</style>