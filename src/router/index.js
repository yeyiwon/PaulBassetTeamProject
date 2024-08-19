import Vue from "vue"
import VueRouter from "vue-router"
import Main from "@/components/Main.vue"
import Menu from "@/components/Menu.vue"

import MyPage from "@/components/MyPage.vue"
import Login from "@/components/Login.vue"
import Join from "@/components/Join.vue"
import MemberShip from "@/components/membership.vue"
import gift from "@/components/gift.vue"
import MenuDetail from "@/components/MenuDetail.vue"
import Cart from '@/components/cart.vue'
import StoreSelection from "@/components/StoreSelection.vue"
import Coupon from "@/components/Coupon.vue";
import KakaoMap from "@/components/KakaoMap.vue"
import OrderHistory from "@/components/OrderHistory.vue"
import OrderInfo from "@/components/OrderInfo.vue"
import JoinEnd from "@/components/JoinEnd.vue";
import likemenulist from "@/components/likemenulist.vue"
import NowOrderInfo from "@/components/NowOrderInfo.vue"
import OrderEnd from "@/components/OrderEnd.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
    {
    path: "/likemenulist",
    name: "likemenulist",
    component: likemenulist
  },
  {
    path: "/Menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/MenuDetail/:id",
    name: "MenuDetail",
    component: MenuDetail
  },
  {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
  {
      path: '/MyPage',
      name: 'MyPage',
      component: MyPage,
      beforeEnter: (to, from, next) => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (user) {
          next();
        } else {
          next('/Login');
        }
      }
    },
  {
    path: "/Coupon",
    name: "Coupon",
    component: Coupon
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Join",
    name: "Join",
    component: Join
  },
  {
    path: "/MemberShip",
    name: "MemberShip",
    component: MemberShip,
    beforeEnter: (to, from, next) => {
      const user = JSON.parse(localStorage.getItem('loggedInUser'));
      if (user) {
        next();
      } else {
        next('/Login');
      }
    }
  },
  {
    path: "/gift",
    name: "gift",
    component: gift
  },
  {
    path: "/JoinEnd",
    name: "JoinEnd",
    component: JoinEnd

  },
  {
    path: "/StoreSelection",
    name: "StoreSelection",
    component: StoreSelection
  },
  {
    path: "/KakaoMap",
    name: "KakaoMap",
    component: KakaoMap
  },
  {
    path: "/OrderHistory",
    name: "OrderHistory",
    component: OrderHistory
  },
  {
    path: "/OrderInfo",
    name: "OrderInfo",
    component: OrderInfo
  },
    {
    path: "/NowOrderInfo",
    name: "NowOrderInfo",
    component: NowOrderInfo
  },
  {
    path: "/OrderEnd",
    name: "OrderEnd",
    component: OrderEnd
  }


]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
