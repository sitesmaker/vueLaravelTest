import Home from '@/pages/Home.vue';
import Messages from '@/pages/Messages.vue'

import axios from 'axios';
import store from  '@/store';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/messages',
        component: Messages,
    }
]

export default routes;
