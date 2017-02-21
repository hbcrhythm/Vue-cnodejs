import Vue from 'vue';
// import $ from 'webpack-zepto';
import $ from 'jquery';
import VueRouter from 'vue-router';
import filters from './filters';
import routes from './routers';
import Alert from './libs/alert';
import store from './vuex/user';
import vueResource from 'vue-resource';
// import mysql from 'mysql2';
// import App from 'components/app.vue';
import FastClick from 'fastclick';
Vue.use(VueRouter);
Vue.use(Alert);
Vue.use(vueResource);

$.ajaxSettings.crossDomain = true;

// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

// 实例化VueRouter
const router = new VueRouter({
    mode: 'history',
    routes
});
FastClick.attach(document.body);

// 处理刷新的时候vuex被清空但是用户已经登录的情况
if (window.sessionStorage.user) {
    store.dispatch('setUserInfo', JSON.parse(window.sessionStorage.user));
}

// VueRouter.post('/api/lookupAccount', (req, res) => {
//     console.log(req);
// });

// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((to, from, next) => {
    // 处理左侧滚动不影响右边
    $('html, body, #page').removeClass('scroll-hide');
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // if (store.state.userInfo.userId) {
        //     next();
        // } else {
        //     next({
        //         path: '/login2',
        //         query: { redirect: to.fullPath }
        //     });
        // }
        next();
    } else {
        next();
    }
});
new Vue({
    router,
    store
    // render: h => h(App)
}).$mount('#app');
