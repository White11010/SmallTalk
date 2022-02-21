<template>
  <div class="q-mr-xl q-mb-xl column justify-center" style="min-width: 700px">
    <h2 class="text-bold text-blue-grey-10 q-mb-md"><span>Welcome to </span><span class="text-deep-purple-10 text-weight-bolder">Small Talk</span></h2>
    <h4 class="text-weight-medium text-blue-grey-10 q-mt-none">Fast and free messaging across any devices</h4>
    <q-btn to="/login" size="lg" padding="8px 22px" color="primary" label="Get started" class="q-mx-auto" style="width: fit-content"/>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartMeeting",

  setup() {

  },
});
</script>

<style scoped>

</style>
