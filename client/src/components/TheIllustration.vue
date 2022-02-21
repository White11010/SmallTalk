<template>
  <div class="illustration__container">
    <img class="illustration" src="~assets/images/illustration.svg" alt="small talk">
  </div>
</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
  name: "TheIllustration",

  setup() {

  },
});

</script>

<style lang="scss" scoped>
.illustration__container {
  height: inherit;
  flex: 1;
}
.illustration {
  width: 100%;
  height: auto;
}
</style>
