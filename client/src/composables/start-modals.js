import {ref, shallowRef} from "vue";

export function useStartModals() {
  const MODALS = {
    SIGNIN: 'SignInModal',
    SIGNUP: 'SignUpModal'
  }

  const currentModal = shallowRef(null)

  const isModalShown = ref(false)

  /**
   * @param modal - pass modal = 0 to reset and close modal
   * */
  const setCurrentModal = (modal) => {
    if (modal === null || Object.keys(MODALS).some(key => MODALS[key] === modal.name)) {
      currentModal.value = modal;
      isModalShown.value = modal !== null;
    } else {
      throw new Error('Unexpected modal component');
    }

    return {
      currentModal,
      setCurrentModal,
      isModalShown
    }
  }
}