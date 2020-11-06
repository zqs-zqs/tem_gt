import Vue from 'vue'
import VueRouter from 'vue-router'
import Rider from '../views/Rider.vue'
import Setname from '../views/Setname.vue'
import Register from '../views/Register.vue'
import Register2 from '../views/Register2.vue'
import Personal from '../views/Personal.vue'
import Revise from '../views/Revise.vue'
import Login from '../views/Login.vue'

// hl
import Ticked from '../views/Ticked.vue'
import Bench from '../views/Bench.vue'
import Details from '../views/Details.vue'
import Hotel from '../views/Hotel.vue'

// zqs
import Person from '../views/Person.vue'
import Set from '../views/Set.vue'
import MyOrder from '../views/MyOrder.vue'
import Trian_details from '../views/Trian_details.vue'

// cx
import Jd from '../views/Jd.vue'
import Avion from '../views/Avion.vue'
import More from '../views/More.vue'
import Place from '../views/Place.vue'
import Index from '../views/Index.vue'
import Plan from '../views/Plan.vue'

//
import Tickets from "../views/Tickets.vue";
import Addpassenger from "../views/Addpassenger.vue";
Vue.use(VueRouter)

const routes = [
  //
  {
    path: "/addpassenger",
    component: Addpassenger,
  },
  {
    path: "/tickets",
    component: Tickets,
    name:"Tickets"
  },
  // c
  {
    path:'/more',
    component:More
  },
  {
    path:'/place',
    component:Place
  },
  {
    path:'/avion',
    component:Avion
  },
  {
    path: '/',
    component: Index
  },
  {
    path: '/jd',
    component:Jd
  },
  // z
  {
    path: '/trian_details',
    component: Trian_details
  },
  {
    path:'/plan',
    component:Plan
  },
  {
    path: '/person',
    component: Person
  },
  {
    path: '/set',
    component: Set
  },
  {
    path: '/myorder',
    component: MyOrder
  },
  // h
  {
    path: '/ticked',
    component: Ticked
  },
  {
    path: '/bench',
    component: Bench
  },
  {
    path:'/hotel',
    component:Hotel
  },
  {
    path: '/details',
    component: Details
  },
  // l
  {
    path: '/setname',
    component: Setname
  },
  {
    path: '/rider',
    component: Rider
  },
  {
    path: '/revise',
    component: Revise
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register2',
    component: Register2
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    component: Index
  },
  // {
  //   path: '/about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
