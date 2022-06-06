<template>
<div class="chats__item">
  <v-avatar color="#757575">
    <v-icon dark>
      mdi-account-circle
    </v-icon>
  </v-avatar>
  <div class="ml-3">
    <p>John Smith</p>
    <p>Last message</p>
  </div>
</div>
</template>

<script>
export default {
  name: "ChatsItem"
}
</script>

<style lang="scss" scoped>
.chats__item {
  width: 100%;
  display: flex;
  align-items: center;
  padding: $padding;
  cursor: pointer;

  &:hover {
    background-color: #E0E0E0;
  }
}
</style>