import { createStore } from 'vuex';
import Messages from '@/store/modules/Messages';

const store = createStore({
    state: {
        url: import.meta.env.VITE_APP_URL,
    },
    modules: {
        Messages,
    }
});

export default store;
