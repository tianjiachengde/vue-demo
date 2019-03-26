import vue from 'vue';
import router from 'vue-router';

vue.use(router);
export default new router({
    // mode:'history',
    routes:[
        {
            path:'/home',
            name:'home',
            component: () => import('../views/home/home.vue')
        },
        {
            path:'/',
            name:'login',
            component: () => import('../views/login/login.vue')
        },
        {
            path:"*",
            redirect:'/login'
        }
    ]
})
