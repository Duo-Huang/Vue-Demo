import Vue from 'vue';
import Router from 'vue-router';

const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '../views/DashBoard');
const Agent = () => import(/* webpackChunkName: "Agent" */ '../views/Agent');
const MyCruise = () => import(/* webpackChunkName: "Agent" */ '../views/MyCruise');
const Help = () => import(/* webpackChunkName: "Agent" */ '../views/Help');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '*',
            redirect: '/dashboard',
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/agent',
            component: Agent
        },
        {
            path: '/myCruise',
            component: MyCruise
        },
        {
            path: '/help',
            component: Help
        },
    ],
    linkActiveClass: "route-active"
})
