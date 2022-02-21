<template>
  <q-list class="q-pa-md" separator>
    <q-item
      v-for="chat in chatsList"
      :key="chat.userId"
      clickable
      v-ripple
      :active="active === chat.userId"
      @click="handleActiveChat(chat.userId)"
      active-class="chat-list__item--active"
      class="text-blue-grey-8"
    >
      <q-item-section avatar>
        <q-icon v-if="chat.avatar === undefined" name="person_outline"/>
      </q-item-section>
      <q-item-section>
        {{ chat.userId }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import {defineComponent, ref} from "vue";
import {useStore} from "vuex";


export default defineComponent({
  name: "MessagesChatsList",
  props: ["chatsList", "userId"],

  setup(props) {

    const active = ref(null)
    const store = useStore();

    const handleActiveChat = (chatId) => {
      active.value = chatId;
      console.log(props.userId, chatId)
      store.dispatch("chats/setActiveChat", {firstUserId: props.userId, secondUserId: chatId})
    }

    return {
      active,
      handleActiveChat
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
