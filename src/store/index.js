import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

const createStore = () => {
    const store =new Vuex.Store({
        modules: {
            user
        },
    });
    return store;
}

export default createStore();
