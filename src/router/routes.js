import Home from '../components/home.vue'
import Contact from '../components/contactUs.vue'
import myAccount from '../components/myAccount.vue'
export const routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'/Contact',
        component:Contact
    },
    {
        path:'/myAccount',
        component:myAccount
    }
]