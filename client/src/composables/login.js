import {reactive} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export function useLogin() {
  const store = useStore();
  const router = useRouter();

  const loginData = reactive({
    login: '',
    password: ''
  })

  const tmpService = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(200)
      }, 1000)
    })
  }

  const login = () => {
    tmpService()
      .then(() => {
        store.commit("user/setLogin", loginData.login);
        router.push({path: '/messages'});
      })


  }

  return {
    loginData,
    login
  }
}