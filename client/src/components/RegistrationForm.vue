<template>
  <div class="q-mr-xl flex flex-center" style="width: 700px">
    <q-card style="width: 400px">
      <q-card-section>
        <h5 class="q-my-sm text-deep-purple-10 text-bold">Registration</h5>
      </q-card-section>
      <q-card-section>
        <q-form
          class="q-gutter-md"
          @submit="handleRegistration"
        >
          <q-input
            filled
            label="Login"
            v-model="loginRef"
            hint="3 symbols at least"
            lazy-rules
            :rules="[ val => val && val.length > 2 || 'Please type your login']"
          />

          <q-input
            filled
            type="password"
            label="Password"
            v-model="passwordRef"
            hint="8 symbols at least, 1 number"
            lazy-rules
            :rules="[ val => passwordRegEx.test(val)  || 'Please type valid password' ]"
          />
          <q-input
            filled
            type="password"
            label="Confirm your password"
            v-model="passwordConfirmRef"
            lazy-rules
            :rules="[ val => val && val.length > 0 && val === passwordRef || 'Passwords don\'t match' ]"
          />
          <div>
            <q-btn label="Sign up" type="submit" color="primary" :disable="!isFormValid"/>
          </div>
        </q-form>
      </q-card-section>
      <q-card-section>
        <p class="text-body1">
          <span>Already a member?</span>
          <span class="text-primary text-weight-bold cursor-pointer">
            <q-btn class="q-pa-none q-ml-sm text-weight-bold" size="md" label="Sign in" flat to="/login"  />
          </span>
        </p>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import {computed, defineComponent, toRaw} from "vue";
import {useQuasar} from "quasar";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {reactive, toRef} from "vue";

export default defineComponent({
  name: "RegistrationForm",

  setup() {
    const $q = useQuasar()
    const store = useStore();
    const router = useRouter();

    const passwordRegEx = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})")

    const userData = reactive({
      login: null,
      password: null,
      passwordConfirm: null
    })

    const loginRef = toRef(userData, 'login')
    const passwordRef = toRef(userData, 'password')
    const passwordConfirmRef = toRef(userData, 'passwordConfirm')

    const isFormValid = computed(() => {
      return loginRef.value !== null &&
      loginRef.value.trim().length > 2 &&
      passwordRegEx.test(passwordRef.value) &&
        passwordRef.value === passwordConfirmRef.value
    })


    const handleRegistration = (event) => {
      event.preventDefault()
      store.dispatch("auth/register", toRaw(userData)).then(
        (response) => {
          console.log(response.status)
          if (response.status === 201) {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              position: 'top',
              icon: 'cloud_done',
              message: 'Signed up successfully'
            })
            router.push('/login')
          }
        },
        (error) => {
          console.log(error)
          if (error.response.status === 409)
              $q.notify({
                color: 'red-5',
                textColor: 'white',
                position: 'top',
                icon: 'warning',
                message: 'User already exists'
              })
          else {
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              position: 'top',
              icon: 'warning',
              message: 'Something went wrong'
            })
          }
        }
      );
    }

    return {
      userData,
      loginRef,
      passwordRef,
      passwordConfirmRef,
      passwordRegEx,
      handleRegistration,
      isFormValid
    }
  },
});
</script>

<style lang="scss" scoped>
.login__card {
  max-width: 400px;
  margin: 0 auto;
}
</style>
