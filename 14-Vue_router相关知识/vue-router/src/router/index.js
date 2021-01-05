import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/home'
// import About from '../components/about'
// import User from '../components/user'

const Home = () => import("../components/home")
const About = () => import("../components/About")
const User = () => import("../components/User")
const HomeNews = () => import("../components/homeNews")
const HomeMessage = () => import("../components/homeMessage")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      // 重定向
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          redirect: 'message'
        },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:userId',
      component: User
    }
  ],
  // 网址显示成html格式
  mode: 'history'
})
