<template>
  <div class="q-mr-xl flex flex-center" style="width: 700px">
    <q-card style="width: 400px">
      <q-card-section>
        <h5 class="q-my-sm text-deep-purple-10 text-bold">Login</h5>
      </q-card-section>
      <q-card-section>
        <q-form
          class="q-gutter-md"
          @submit="handleLogin"
        >
          <q-input
            filled
            label="Login"
            v-model="loginRef"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type your login']"
          />

          <q-input
            filled
            type="password"
            label="Password"
            v-model="passwordRef"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type your password' ]"
          />
          <div>
            <q-btn label="Sign in" type="submit" color="primary" :disable="!isFormValid"/>
          </div>
        </q-form>
      </q-card-section>
      <q-card-section>
        <p class="text-body1">
          <span>Don't have an account?</span>
          <span class="text-primary text-weight-bold cursor-pointer">
            <q-btn class="q-pa-none q-ml-sm text-weight-bold" size="md" label="Sign up" flat to="/registration" />
          </span>
        </p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import {defineComponent, toRef, toRaw} from "vue";
import {reactive} from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'vuex'
import { useRouter} from 'vue-router'
import {computed} from "vue";

export default defineComponent({
  name: "LoginForm",

  setup() {
    const $q = useQuasar()
    const store = useStore();
    const router = useRouter();

    const userData = reactive({
      login: null,
      password: null
    })

    const loginRef = toRef(userData, 'login')
    const passwordRef = toRef(userData, 'password')

    const isFormValid = computed(() => {
      return loginRef.value !== null &&
        loginRef.value.trim() !== "" &&
        passwordRef.value !== null &&
        passwordRef.value.trim() !== ""
    })

    const handleLogin = (event) => {
      event.preventDefault()
      store.dispatch("auth/login", toRaw(userData)).then(
        (user) => {
          router.push("/messages");
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            position: 'top',
            icon: 'cloud_done',
            message: `Welcome, ${user.login}`
          })
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
    }
    return {
      userData,
      handleLogin,
      loginRef,
      passwordRef,
      isFormValid
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
