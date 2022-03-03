<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar class="q-mx-auto q-px-md" style="max-width: 1432px">
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        SmallTalk
      </q-toolbar-title>
      <q-btn v-if="$route.path !== '/messages'" class="text-weight-bold" color="white" text-color="deep-purple-10" to="/login" label="Login" />
      <q-btn v-if="$route.path !== '/messages'" class="q-ml-md text-weight-bold" color="white" text-color="deep-purple-10" to="/registration" label="Sign Up" />
      <q-btn-dropdown
        v-if="$route.path === '/messages' && userData !== null"
        color="white"
        text-color="primary"
        icon="account_circle"
        :label="userData.login"
      >
        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label class="text-weight-medium">Log out</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-avatar>
                <q-icon name="logout" />
              </q-avatar>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
</template>

<script>
import {computed, defineComponent,toRaw} from "vue";
import {useStore} from "vuex";
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "StartHeader",
  props: ["socket"],

  setup (props) {
    const $q = useQuasar()
    const store = useStore();
    const router = useRouter();
    const userData = computed(() => store.getters['auth/userData'])

    return {
      userData,

      onItemClick() {
        store.dispatch("auth/logout").then(
          () => {
            props.socket.disconnect()
            router.push("/");
          },
          () => {
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              position: 'top',
              icon: 'warning',
              message: 'Something went wrong...'
            })
          }
        );
      },
    }
  }
});
</script>

<style scoped>

</style>
