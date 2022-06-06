<template>
  <v-app>
    <main-header></main-header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MainHeader from "@/layouts/MainHeader/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "./scss/main";
</style>
