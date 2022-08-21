import Vue from 'vue'
import VueRouter from 'vue-router'
const HomeView = () => import("@/views/HomeView/HomeView");
const LoginView = () => import("@/views/LoginView/LoginView");

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: HomeView,
    meta: {
      login_required: true
    }
  },
  {
    path: "/login",
    component: LoginView
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.login_required) {
    if (window.localStorage.getItem("UserInfo")) {
      next()
    } else {
      next("/login")
    }
  } else {
    next();
  }
})

export default router
