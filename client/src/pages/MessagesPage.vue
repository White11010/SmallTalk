<template>
  <q-page padding>
    <the-header />
    <div class="wrapper" style="flex-direction: column">
      <div class="messages__page">
        <div class="messages__sidebar">
          <messages-search />
          <messages-chats-list />
        </div>
        <div class="messages__main">
          <messages-active-chat />
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

export default defineComponent({
  name: 'RegistrationPage',
  components: {
    TheHeader,
    MessagesSearch,
    MessagesChatsList,
    MessagesActiveChat
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
