import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import App from "../App.vue";
import LogIn from "../components/LogIn.vue";
import SignUp from "../components/SignUp.vue";
import Homee from "../components/Homee.vue";

const routes = [
  {
    path: "/",
    name: "root",
    component: App
  },
  {
    path: "/user/logIn",
    name: "logIn",
    component: LogIn
  },
  {
    path: "/user/signUp",
    name: "signUp",
    component: SignUp
  },
  {
    path: "/user/homee",
    name: "homee",
    component: Homee
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
