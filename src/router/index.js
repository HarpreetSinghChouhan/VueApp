import AboutView from '@/view/AboutView.vue'
import HomeView from '@/view/HomeView.vue'
import ProductSetting from '@/view/ProductSetting.vue'
import Dependency from '@/components/Dependency.vue'
// import ProductMan from '@/view/ProductManage.vue'

import EditProduct from '@/components/EditProduct.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProductMan from '@/view/ProductMan.vue'

// import HomeView from '/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path:'/ProductSetting',
      name:'ProductSetting',
      component:ProductSetting,
    },
    {
      path:'/ProductMan',
      name:'ProductMan',
      component:ProductMan,
    },
    {
      path:'/EditProduct',
      name:'EditProduct',
      component:EditProduct,
      // props:true
    },
    {
      path:'/Dependency',
      name:'Dependency',
      component:Dependency,
    },
  ],
})

export default router
