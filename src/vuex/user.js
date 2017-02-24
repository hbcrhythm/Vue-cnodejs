import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const userStore = new Vuex.Store({
    state: {
        userInfo: {},
        idToken: '',
        showApp: false
    },
    getters: {
        getUserInfo(state) {
            return state.userInfo;
        },
        getidToken(state) {
            return state.idToken;
        },
        getShowApp(state) {
            return state.showApp;
        }
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setIdToken(state, idToken) {
            state.idToken = idToken;
        },
        setShowApp(state, showApp) {
            state.showApp = showApp;
        }
    },
    actions: {
        setUserInfo({ commit }, user) {
            commit('setUserInfo', user);
        },
        setIdToken({ commit }, idToken) {
            commit('setIdToken', idToken);
        },
        setShowApp({ commit }, showApp) {
            commit('setShowApp', showApp);
        }
    }
});

export default userStore;