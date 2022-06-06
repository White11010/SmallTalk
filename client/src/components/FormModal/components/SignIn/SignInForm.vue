<template>
  <v-form
      ref="form"
  >
    <v-text-field
        label="login"
        v-model="loginData.login"
    ></v-text-field>
    <v-text-field
        label="password"
        v-model="loginData.password"
    ></v-text-field>
    <v-card-actions class="flex justify-end">
      <v-btn @click="cancel">
        cancel
      </v-btn>
      <v-btn @click="submit">
        submit
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script setup>
import {useLogin} from "@/composables/login";

const emit = defineEmits({
  submitForm: null,
  cancelForm: null
})

const {loginData, login} = useLogin();

const submit = () => {
  login();
  emit('submitForm');
}

const cancel = () => {
  emit('cancelForm');
}
</script>

<style scoped>

</style>