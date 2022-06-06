import { createStore } from "vuex";
import {userStore} from "@/store/user";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user: userStore
  },
});
