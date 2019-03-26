import api from  '@/api/user.js'
const state = {
    info:{
        userName:'112'
    },
}

export const getters = {
    getCurUserName:state => {
        window.console.info(state.info.userName);
        return state.info.userName;
    }
};

export const actions = {
    login:({commit},userInfo) => {
        const res = api.login(userInfo);
        if(res) {
            commit('loginSuccess',userInfo);
        }
        else{
            commit('loginFail');
        }
    }
};

export const mutations = {
    loginSuccess(state,userInfo) {
        state.info.userName = userInfo.user;
        window.console.log('login success' + userInfo.toString());
    },
    loginFail(){
        state.info = {};
        window.console.log('login failed');
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
