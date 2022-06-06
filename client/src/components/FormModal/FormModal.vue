<template>
<component
    :is="currentModal"
    :isShown="isModalShown"
    @close="emitClose"
></component>
</template>

<script setup>
const props = defineProps({
  currentModal: {
    required: true
  },
  isModalShown: {
    type: Boolean,
    required: true,
    default: false
  }
})

const emit = defineEmits({
  close: null
})

const emitClose = () => {
  emit('close');
}
</script>

<style scoped>

</style>