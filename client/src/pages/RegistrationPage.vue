<template>
  <q-page class="registration__page flex flex-center">
    <the-header />
    <div class="wrapper">
      <registration-form/>
      <the-illustration/>
    </div>
  </q-page>
</template>

<script>
import RegistrationForm from "components/RegistrationForm";
import TheIllustration from "components/TheIllustration";
import TheHeader from "components/TheHeader";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'RegistrationPage',
  components: {
    RegistrationForm,
    TheIllustration,
    TheHeader
  }




});
</script>
