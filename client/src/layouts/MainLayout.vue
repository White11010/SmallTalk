<template>
  <q-layout view="hHh lpR fFf" style="background-color: #F7F8FA; max-height: 100vh">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {

  },
});
</script>
