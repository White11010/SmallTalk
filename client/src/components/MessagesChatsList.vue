<template>
  <q-list class="q-pa-md" separator>
    <q-item v-if="chatsList.length === 0">
      <q-item-section avatar>
        <p class="text-body1 text-grey-7">No chats. Find a user by his login to start messaging</p>
      </q-item-section>
    </q-item>
    <q-item
      v-for="chat in chatsList"
      :key="chat.id"
      clickable
      v-ripple
      :active="active !== null && active.secondUserId === chat.id"
      @click="handleActiveChat(chat.id)"
      active-class="chat-list__item--active"
      class="text-blue-grey-8"
    >
      <q-item-section avatar>
        <q-icon v-if="chat.avatar === undefined" name="person_outline"/>
      </q-item-section>
      <q-item-section>
        {{ chat.login }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import {computed, defineComponent, ref} from "vue";
import {useStore} from "vuex";


export default defineComponent({
  name: "MessagesChatsList",
  props: ["chatsList", "userId"],

  setup(props) {

    const store = useStore();

    const active = computed(() => store.getters["chats/activeChat"])

    const handleActiveChat = (chatId) => {
      store.dispatch("chats/setActiveChat", {firstUserId: props.userId, secondUserId: chatId, messages: null})
    }

    return {
      handleActiveChat,
      active
    }
  }
})
</script>

<style lang="scss" scoped>
.chat-list__item--active {
  background: $primary;
  color: white !important;
}
</style>
