import { PUSH_MESSAGES_DATA } from '@/store/mutation-types.js';
import axios from 'axios';
import store from '@/store/index.js';
export default {
    namespaced: true,
    state: {
        messages: [],
    },
    getters: {
        getMessages(state) {
            return state.messages;
        }
    },
    mutations: {
        [PUSH_MESSAGES_DATA](state, payload) {

            if(Object.keys(payload).length) {
                state.messages.push(payload);
            }
        }
    },
    actions: {
        async sendMessage(context, data) {
            let response = await axios.post('/message', data);
            
            console.log(response)
        }
    }
}
