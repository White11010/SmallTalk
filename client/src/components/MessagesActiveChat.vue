<template>
  <div class="messages__active-chat active-chat">
    <div class="active-chat__placeholder" v-if="activeChat === null">
      <p class="text-white no-margin">Select a chat to start messaging</p>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import {defineComponent} from "vue";
import {useStore} from "vuex";

export default defineComponent({
  name: "MessagesActiveChat",
  setup() {

    const store = useStore();
    const activeChat = computed(() => store.getters['chats/activeChat'])

    return {
      activeChat
    }
  }


})
</script>

<style lang="scss" scoped>
.active-chat {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__placeholder {
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 10px;
    background-color: $grey-6;
  }
}
</style>
