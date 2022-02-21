const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/StartPage.vue") },
      { path: "login", component: () => import("pages/LoginPage.vue") },
      { path: "registration", component: () => import("pages/RegistrationPage.vue") },
      { path: "messages", component: () => import("pages/MessagesPage.vue"), meta: { requiresAuth: true } },
    ],
  },


  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
