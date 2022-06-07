<template>
  <v-form
      ref="form"
  >
    <v-text-field
        label="login"
        v-model="userData.login"
    ></v-text-field>
    <v-text-field
        label="password"
        v-model="userData.password"
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
//import useVuelidate from '@vuelidate/core'
import { required, minValue } from '@vuelidate/validators'
import {computed, reactive, ref} from "vue";
import authService from "@/services/auth-service"
import {useLogin} from "@/composables/login";

//const minPasswordLength = ref(8);

  const emit = defineEmits({
    submitForm: null,
    cancelForm: null
  })

  const userData = reactive({
    login: '',
    password: ''
  })

  // const rules = computed(() => {
  //   // console.log(userData.login)
  //   // console.log(userData.password)
  //   return {
  //       login: { required },
  //       password: {
  //         minLength: minValue(minPasswordLength)
  //       }
  //   }
  // })

  // const v$ = useVuelidate(rules, userData)

  const submit = async () => {
    authService.signUp(userData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    emit('submitForm');
  }

  const cancel = () => {
    emit('cancelForm');
  }

</script>

<style scoped></style>