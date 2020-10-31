import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
  ]
});
