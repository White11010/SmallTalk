<template>
  <q-page  class="start column justify-center">
    <the-header />
    <div class="wrapper">
      <start-meeting />
      <the-illustration />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TheIllustration from "components/TheIllustration";
import StartMeeting from "components/StartMeeting";
import TheHeader from "components/TheHeader";

export default defineComponent({
  name: "StartPage",
  components: {
    TheIllustration,
    StartMeeting,
    TheHeader
  },

});
</script>
