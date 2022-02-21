<template>
  <div class="q-pa-md" style="width: 100%">

    <q-form
      class="q-gutter-md"
    >
      <q-input
        @keyup.enter="onSubmit"
        filled
        v-model="searchInput"
        label="Search for users"
      />


    </q-form>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: "MessagesSearch",

  setup () {
    const $q = useQuasar()

    const searchInput = ref(null)

    return {
      searchInput,

      onSubmit (event) {
        event.preventDefault();
        console.log(searchInput.value)

      },

    }
  }
})
</script>
