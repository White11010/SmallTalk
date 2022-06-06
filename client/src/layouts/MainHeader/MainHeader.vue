<template>
  <v-app-bar>
    <v-icon class="mr-4">mdi-message-reply-text-outline</v-icon>
    <v-toolbar-title>Small Talk</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="setCurrentModal(SignInModal)">Sign in</v-btn>
    <v-btn @click="setCurrentModal(SignUpModal)">Sign Up</v-btn>
    <form-modal
      v-if="currentModal"
      :current-modal="currentModal"
      :is-modal-shown="isModalShown"
      @close="setCurrentModal(null)"
    ></form-modal>
  </v-app-bar>
</template>

<script setup>
import {useStartModals} from "@/composables/start-modals";
import FormModal from "@/components/FormModal/FormModal";
//TODO: посмотреть, где должен быть импорт компонента
import SignInModal from "@/components/FormModal/components/SignIn/SignInModal";
import SignUpModal from "@/components/FormModal/components/SignUp/SignUpModal";

const {currentModal, isModalShown, setCurrentModal} = useStartModals();
</script>

<style scoped>

</style>