import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const userStore = new Vuex.Store({
    state: {
        userInfo: {},
        idToken: ''
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo;
        },
        getidToken(state) {
            return state.idToken;
        }
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setIdToken(state, idToken) {
            state.idToken = idToken;
        }
    },
    actions: {
        setUserInfo({ commit }, user) {
            commit('setUserInfo', user);
        },
        setIdToken({ commit }, idToken) {
            commit('setIdToken', idToken);
        }
    }
});

export default userStore;