<template>
  <q-list class="q-pa-md" separator>
    <q-item
      v-for="friend in friendsList"
      :key="friend.id"
      clickable
      v-ripple
      :active="active === friend.id"
      @click="active = friend.id"
      active-class="chat-list__item--active"
      class="text-blue-grey-8"
    >
      <q-item-section avatar>
        <q-icon v-if="friend.avatar === null" name="person_outline"/>
      </q-item-section>
      <q-item-section>
        {{ friend.name }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import {defineComponent, ref} from "vue";


export default defineComponent({
  name: "MessagesChatsList",

  setup() {
    const friendsList = [
      {
        id: 1,
        name: 'AnonymDicksucka228',
        avatar: null
      },
      {
        id: 2,
        name: 'UrMomDestroyer',
        avatar: null
      },
      {
        id: 3,
        name: 'GoldenRainEnjoyer',
        avatar: null
      }]

    const active = ref(null)

    return {
      friendsList,
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
