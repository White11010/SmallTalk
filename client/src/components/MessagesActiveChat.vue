<template>
  <div class="messages__active-chat active-chat">
    <div class="active-chat__placeholder" v-if="activeChat === null">
      <p class="text-white no-margin">Select a chat to start messaging</p>
    </div>
    <div v-else class="q-pa-md column justify-end" style="width: 100%; height: 100%">
      <div class="q-pa-md row justify-center">
        <div style="width: 100%">
          <q-chat-message
            v-for="message in messages"
            :key="message.text"
            :name="message.recieverId == userId ? 'me' : message.recieverId"
            :text="[message.text]"
            :sent="message.recieverId == userId"
          />
        </div>
      </div>
      <q-form @submit="onSubmit">
        <q-input
          v-model="text"
          filled
          type="textarea"
        />
        <q-btn class="q-ml-auto" type="submit" label="send" color="primary" icon-right="send" style="width: fit-content"/>
      </q-form>
    </div>
  </div>
</template>

<script>
import {defineComponent, computed, ref} from "vue";
import {useStore} from "vuex";

export default defineComponent({
  name: "MessagesActiveChat",
  props: ["userId", "socket"],
  setup(props) {

    const store = useStore();
    const activeChat = computed(() => store.getters['chats/activeChat'])

    const text = ref(null)

    const messages = ref([]);

    props.socket.on("getMessage", (message) => {
      console.log(message)
      messages.value.push(message);
    })

    const onSubmit = (event) => {
      event.preventDefault();
      props.socket.emit("sendMessage", {senderId: props.userId, receiverId: activeChat.value.secondUserId, text: text.value})
    }

    return {
      activeChat,
      text,
      messages,
      onSubmit
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
