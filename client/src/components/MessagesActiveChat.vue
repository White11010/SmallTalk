<template>
  <div class="messages__active-chat active-chat">
    <div class="active-chat__placeholder" v-if="activeChat === null">
      <p class="text-white no-margin">Select a chat to start messaging</p>
    </div>
    <div v-else class="q-pa-md column justify-end" style="width: 100%; height: 100%">
      <div class="q-pa-md" style="height: calc(100% - 135px)">
          <div class="active-chat__messages" ref="messagesArea">
            <q-chat-message
              v-for="(message, index) in messages"
              :key="index"
              :name="message.sender === userId ? 'me' : message.sender.toString()"
              :text="[message.text]"
              :sent="message.sender === userId"
              class="text-h6"
            />
          </div>
      </div>
      <q-form class="row items-end active-chat__form" @submit="onSubmit">
        <q-input
          v-model="text"
          filled
          type="textarea"
          aria-multiline="true"
          placeholder="Write a message..."
          class="text-body1 active-chat__input"
        />
        <q-btn class="q-ml-auto" type="submit" label="send" color="primary" icon-right="send"
               style="width: fit-content; height: min-content"/>
      </q-form>
    </div>
  </div>
</template>

<script>
import {defineComponent, computed, ref, watch, onMounted, watchEffect} from "vue";
import {useStore} from "vuex";

import MessagesService from "src/services/messages.service";

export default defineComponent({
  name: "MessagesActiveChat",
  props: ["userId", "socket"],
  setup(props) {

    const store = useStore();

    const messagesArea = ref(null);

    const activeChat = computed(() => store.getters['chats/activeChat'])
    const messages = computed(() => store.getters['chats/activeMessages'])

    const text = ref(null)


    watch(() => activeChat.value, () => {
      activeChat.value !== null && store.dispatch("chats/getMessagesInActiveChat", activeChat.value.secondUserId)
    })

    watchEffect(() =>  {
      if (messages.value.length !== 0) {
        setTimeout(() => {
          messagesArea.value.scrollTop = messagesArea.value.scrollHeight - messagesArea.value.clientHeight
        })
      }
    })


    const onSubmit = (event) => {
      event.preventDefault();
      MessagesService.send(activeChat.value.secondUserId, text.value).then(
        message => {
          store.dispatch("chats/addNewMessage", {sender: message.sender, text: message.text, date: message.date})
        },
        error => {
          console.log(error)
        }
      )
      props.socket.emit("sendMessage", {
        senderId: props.userId,
        receiverId: activeChat.value.secondUserId,
        text: text.value
      })
      text.value = null;
    }

    return {
      activeChat,
      text,
      messages,
      onSubmit,
      messagesArea
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

  &__messages {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-right: 10px;
    overflow-y: scroll;
  }

  &__form {
    height: fit-content !important;
    gap: 1rem;
  }

  &__input {
    flex: 1;
    height: min-content !important;
  }
}
</style>
