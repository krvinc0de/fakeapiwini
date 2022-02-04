import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Posts from "../views/Posts"
import Comentarios from "@/views/Comentarios";
import Albums from "@/views/Albums";
import Album from "@/views/Album";
import todo from "@/views/Todo";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/posts/:id',
    name: 'Posts',
    component: Posts,
    props:{
      id:route => ({ search: route.query.q })
    }
  },
  {
    path: '/comentarios/:id',
    name: 'Comentarios',
    component: Comentarios,
    props:{
      id:route => ({ search: route.query.q })
    }
  },
  {
    path: '/albums/:id',
    name: 'Albums',
    component: Albums,
    props:{
      id:route => ({ search: route.query.q })
    }
  },
  {
    path: '/album/:id',
    name: 'Album',
    component: Album,
    props:{
      id:route => ({ search: route.query.q })
    }
  },
  {
    path: '/todo/:id',
    name: 'Todo',
    component: todo,
    props:{
      id:route => ({ search: route.query.q })
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
