<template>
  <q-page padding>
    <the-header />
    <div class="wrapper" style="flex-direction: column">
      <div class="messages__page">
        <div class="messages__sidebar">
          <messages-search />
          <messages-chats-list :chatsList="chatsList" :userId="userData.id"/>
        </div>
        <div class="messages__main">
          <messages-active-chat :userId="userData.id" :socket="socket"/>
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
import {computed} from "vue";
import {useStore} from "vuex";


export default defineComponent({
  name: 'RegistrationPage',
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
    const chatsList = computed(() => store.getters['chats/chatsList'])

    socket.emit("addUser", userData.value.id)

    socket.on("getUsers", (usersArray) => {
      console.log(usersArray)
      store.dispatch("chats/saveChats", usersArray)
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
}
.messages__sidebar {
  height: 100%;
  border-right: 1px solid #eeeeee;
}

.messages__main {
  height: 100%;
}
</style>
