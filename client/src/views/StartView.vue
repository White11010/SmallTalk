<template>
  <section class="start">
    <img
      class="start__illustration"
      :src="Illustration"
      alt="illustration"
    >

    <div>
      <h1>Welcome to Small Talk</h1>
      <v-btn @click.stop="setCurrentModal(SignUpModal)">get started</v-btn>
    </div>

    <form-modal
        v-if="currentModal"
        :currentModal="currentModal"
        :is-modal-shown="isModalShown"
        @close="setCurrentModal(null)"
    ></form-modal>
  </section>
</template>

<script setup>
  import Illustration from "@/assets/images/illustration.svg"
  import FormModal from "@/components/FormModal/FormModal"
  //TODO: посмотреть, где должен быть импорт компонента
  import SignUpModal from "@/components/FormModal/components/SignUp/SignUpModal"
  import {useStartModals} from "@/composables/start-modals";

  const {currentModal, isModalShown, setCurrentModal} = useStartModals();
</script>

<style lang="scss" scoped>
  .start {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 100%;
  }
  .start__illustration {
    max-height: 80vh;
  }
</style>
