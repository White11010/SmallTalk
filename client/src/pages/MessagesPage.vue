<template>
  <q-page padding >
    <the-header :socket="socket"/>
    <div class="wrapper" style="flex-direction: column">
      <div class="messages__page" style="height: calc(100vh - 98px);">
        <div class="messages__sidebar">
          <messages-search :userId="userData && userData.id"/>
          <messages-chats-list :chatsList="chatsList" :userId="userData && userData.id"/>
        </div>
        <div class="messages__main">
          <messages-active-chat :userId="userData && userData.id" :socket="socket"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import TheHeader from "components/TheHeader";
import MessagesSearch from "components/MessagesSearch";
import MessagesChatsList from "components/MessagesChatsList";
import MessagesActiveChat from "components/MessagesActiveChat";
import {defineComponent} from "vue";
import { io } from "socket.io-client";
import {computed, onMounted} from "vue";
import {useStore} from "vuex";
import {activeChat} from "src/store/chats/getters";


export default defineComponent({
  name: 'MessagesPage',
  components: {
    TheHeader,
    MessagesSearch,
    MessagesChatsList,
    MessagesActiveChat
  },

  setup() {
    const socket = io("ws://localhost:8900")

    const store = useStore();

    const userData = computed(() => store.getters['auth/userData'])
    const chatsList = computed(() => store.getters['chats/chatsList'].filter(chat => userData.value && (chat.userId !== userData.value.id)))
    const activeChat = computed(() => store.getters['chats/activeChat'])

    socket.emit("addUser", userData.value.id)

    socket.on("getUsers", (usersArray) => {
      store.dispatch("chats/saveChats", usersArray)
    })

    socket.on("getMessage", (message) => {
      console.log(message)
      console.log( activeChat.value.secondUserId)
      if (message.senderId === activeChat.value.secondUserId) {
        store.dispatch("chats/addNewMessage", {sender: message.senderId, text: message.text, date: new Date().toISOString()})
      }
    })

    onMounted(() => {
      store.dispatch("chats/saveChats")
    })

    return {
      userData,
      chatsList,
      socket
    }
  }


});
</script>

<style lang="scss">
.messages__page {
  flex: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100%;
}
.messages__sidebar {
  min-height: 0;
  max-height: 100%;
  border-right: 1px solid #eeeeee;
}

.messages__main {
  height: 100%;
}
</style>
