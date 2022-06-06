import { createRouter, createWebHistory } from "vue-router";
import StartView from "../views/StartView.vue";
import MessagesView from "@/views/MessagesView";

const routes = [
  {
    path: "/",
    name: "start",
    component: StartView,
  },
  {
    path: "/messages",
    name: "messages",
    component: MessagesView,
    // component: () => {
    //   import(/* webpackChunkName: "about" */ "../views/MessagesView")
    // }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
