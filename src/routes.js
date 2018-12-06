import Home from './components/Home.vue';
import Welcome from './components/Welcome.vue';


export default [
    { path: '/', component: Home, meta: { requiresAuth: true } },
	{ path: '/welcome', component: Welcome }
]
