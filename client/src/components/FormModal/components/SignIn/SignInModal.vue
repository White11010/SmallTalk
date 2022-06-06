<template>
  <v-dialog
      v-model="isShown"
      persistent
  >
    <v-card class="modal">
      <v-card-title>Login</v-card-title>
      <sign-in-form
        @submitForm="emitClose"
        @cancelForm="emitClose"
      ></sign-in-form>
    </v-card>
  </v-dialog>
</template>

<script setup>
import SignInForm from "@/components/FormModal/components/SignIn/SignInForm"

defineProps({
  isShown: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits({
  close: null
})

const emitClose = () => {
  emit('close');
}
</script>

<style scoped>

</style>