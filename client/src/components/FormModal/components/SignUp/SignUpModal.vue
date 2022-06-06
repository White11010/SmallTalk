<template>
  <v-dialog
      v-model="isShown"
      persistent
  >
    <v-card class="modal">
      <v-card-title>Create Account</v-card-title>
      <sign-up-form
        @submitForm="emitClose"
        @cancelForm="emitClose"
      ></sign-up-form>
    </v-card>
  </v-dialog>
</template>

<script setup>
import SignUpForm from "@/components/FormModal/components/SignUp/SignUpForm"

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