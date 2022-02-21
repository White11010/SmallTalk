<template>
  <q-page class="login__page flex flex-center">
    <the-header />
    <div class="wrapper">
      <login-form/>
      <the-illustration />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TheIllustration from "components/TheIllustration";
import LoginForm from "components/LoginForm";
import TheHeader from "components/TheHeader";

export default defineComponent({
  name: "LoginPage",
  components: {
    TheIllustration,
    LoginForm,
    TheHeader
  },

});
</script>
