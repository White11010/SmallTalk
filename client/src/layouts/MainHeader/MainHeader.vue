<template>
  <v-app-bar class="header" flat color="#EEEEEE">
    <v-icon class="mr-4">mdi-message-reply-text-outline</v-icon>
    <v-toolbar-title>Small Talk</v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="userLogin.trim().length === 0">
      <v-btn @click="setCurrentModal(SignInModal)">Sign in</v-btn>
      <v-btn @click="setCurrentModal(SignUpModal)">Sign Up</v-btn>
      <form-modal
          v-if="currentModal"
          :current-modal="currentModal"
          :is-modal-shown="isModalShown"
          @close="setCurrentModal(null)"
      ></form-modal>
    </div>
    <div v-else class="header__user">
      <v-avatar color="#757575">
        <v-icon dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <p>{{userLogin}}</p>
    </div>
  </v-app-bar>
</template>

<script setup>
import {useStartModals} from "@/composables/start-modals";
import FormModal from "@/components/FormModal/FormModal";
//TODO: посмотреть, где должен быть импорт компонента
import SignInModal from "@/components/FormModal/components/SignIn/SignInModal";
import SignUpModal from "@/components/FormModal/components/SignUp/SignUpModal";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()
const userLogin = computed(() => store.getters["user/getLogin"]);

const {currentModal, isModalShown, setCurrentModal} = useStartModals();


</script>

<style lang="scss" scoped>
.header {
  height: $header-height !important;
}
.header__user {
  display: flex;
  align-items: center;
  gap: $padding;
}
</style>