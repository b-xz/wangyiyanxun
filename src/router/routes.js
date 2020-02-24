import Home from '../pages/home/home.vue'
import Cart from '../pages/cart/cart.vue'
import  Personal from '../pages/personal/personal.vue'
import Shop from '../pages/shop/shop.vue'
import Sort from '../pages/sort/sort.vue'
import Login from '../components/login/login.vue'
import Search from '../components/Search/search.vue'
import Email from '../components/Email/emali.vue'

export default[
     {
         path: '/home',
         component: Home,
         meta:{
             isShowFooter:true
         }
     },
     {
         path: '/cart',
         component: Cart,
         meta: {
             isShowFooter: true
         }
     },
     {
         path: '/personal',
         component: Personal,
         meta: {
             isShowFooter: true
         },
         children:[
            {
                path: '/personal/login',
                component: Login,
                meta: {
                    isShowFooter: false
                }
            },
            {
               path: '/personal',
               redirect: '/personal/login'
            }
         ]
     },
     {
         path: '/shop',
         component: Shop,
         meta: {
             isShowFooter: true
         }
     },
     {
         path: '/sort',
         component: Sort,
         meta: {
             isShowFooter: true
         }
     },
     {
         path: '/search',
         component: Search,
         meta: {
             isShowFooter: false
         }
     },
     {
        path: '/email',
        component: Email,
        meta: {
            isShowFooter: false
        }
     },
     {
         path: '/',
         redirect: '/home'
     }
]