<template>
  <div class="q-pa-md" style="width: 100%; position:relative;">

    <q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="searchInput"
        label="Search for users"
      />
    </q-form>
    <q-scroll-area
      v-if="searchUsers.length !== 0"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      class="users-search__list"
    >
        <q-item
          v-for="user in searchUsers"
          :key="user.id"
          clickable
          v-ripple
          class="text-blue-grey-8"
          @click="handleActiveChat(user.id)"
        >
          <q-item-section avatar>
            <q-icon v-if="user.avatar === undefined" name="person_outline"/>
          </q-item-section>
          <q-item-section>
            {{ user.login }}
          </q-item-section>
        </q-item>
    </q-scroll-area>
  </div>
</template>

<script>
import {ref, defineComponent, watch} from 'vue'
import {useStore} from "vuex";

import UsersService from "src/services/users.service";

export default defineComponent({
  name: "MessagesSearch",
  props: ["userId"],

  setup(props) {
    const store = useStore()
    const searchInput = ref(null)
    const searchUsers = ref([])

    watch(searchInput, (currentValue) => {
      if (currentValue !== null && currentValue.trim() !== "") {
        UsersService.search(currentValue).then(
          users => {
            searchUsers.value = users
          },
          error => {
            console.log(error)
          })
      } else {
        searchUsers.value = []
      }
    })

    const handleActiveChat = (userId) => {
      searchInput.value = null
      searchUsers.value = []
      store.dispatch("chats/addChat", userId)
      store.dispatch("chats/setActiveChat", {firstUserId: props.userId, secondUserId: userId})
    }

    return {
      searchInput,
      searchUsers,
      handleActiveChat,

      thumbStyle: {
        borderRadius: '5px',
        backgroundColor: '#cccccc',
        width: '10px',
        opacity: 1
      },
      barStyle: {
        right: '2px',
        backgroundColor: 'white',
        width: '10px',
        opacity: 0
      }
    }
  }
})
</script>

<style lang="scss">
.users-search__list {
  position: absolute;
  left: 16px;
  height: 200px;
  width: calc(100% - 32px);
  background: white;
  border-radius: 0 0 4px 4px;
  z-index: 100;
}
</style>
