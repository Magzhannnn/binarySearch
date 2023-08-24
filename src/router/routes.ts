import Auth from "@/components/Auth.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/main",
    name: "main",
    component: HelloWorld,
    children: [
      {
        path: "login",
        name: "login",
        component: Auth,
      },
      {
        path: "sign-up",
        name: "sign-up",
        component: Auth,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
