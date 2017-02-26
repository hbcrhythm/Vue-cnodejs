// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Home = resolve => {
    require.ensure(['./views/index.vue'], () => {
        resolve(require('./views/index.vue'));
    });
};

const List = resolve => {
    require.ensure(['./views/list.vue'], () => {
        resolve(require('./views/list.vue'));
    });
};

const routers = [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
        requiresAuth: true,
        showInSidebar: false,
        title: '主页'
    }
}, {
    path: '/redirect',
    name: 'redirect',
    component: {
        beforeCreate () {
            this.$router.replace({
                path: decodeURIComponent(this.$route.query.dest || '/'),
                force: true
            });
        },
        template: '<span></span>'
    },
    meta: {
        showInSidebar: false
    }
}, {
    path: '/cnodevue',
    name: 'cnodevue',
    component: Home,
    meta: {
        showInSidebar: false,
        title: 'codevue'
    }
}, {
    path: '/list',
    name: 'list',
    component: List,
    meta: {
        requiresAuth: true,
        showInSidebar: false,
        title: '全部'
    }
}, {
    path: '/topic/:id',
    name: 'topic',
    component(resolve) {
        require.ensure(['./views/topic.vue'], () => {
            resolve(require('./views/topic.vue'));
        });
    },
    meta: {
        showInSidebar: false,
        title: 'topic'
    }
}, {
    path: '/add',
    name: 'add',
    component(resolve) {
        require.ensure(['./views/new.vue'], () => {
            resolve(require('./views/new.vue'));
        });
    },
    meta: {
        requiresAuth: true,
        showInSidebar: false,
        title: 'add'
    }
}, {
    path: '/message',
    name: 'message',
    component(resolve) {
        require.ensure(['./views/message.vue'], () => {
            resolve(require('./views/message.vue'));
        });
    },
    meta: {
        requiresAuth: true,
        showInSidebar: false,
        title: 'message'
    }
}, {
    path: '/user/:loginname',
    name: 'user',
    component(resolve) {
        require.ensure(['./views/user.vue'], () => {
            resolve(require('./views/user.vue'));
        });
    },
    meta: {
        showInSidebar: false,
        title: 'user'
    }
}, {
    path: '/about',
    name: 'about',
    component(resolve) {
        require.ensure(['./views/about.vue'], () => {
            resolve(require('./views/about.vue'));
        });
    },
    meta: {
        showInSidebar: true,
        title: '灰色天空',
        icon: '#icon-whale__easyiconnet'
    }
}, {
    path: '/login',
    name: 'login',
    component(resolve) {
        require.ensure(['./views/login.vue'], () => {
            resolve(require('./views/login.vue'));
        });
    },
    meta: {
        showInSidebar: false,
        title: 'login'
    }
}, {
    path: '/login2',
    name: 'login2',
    component(resolve) {
        require.ensure(['./views/login2.vue'], () => {
            resolve(require('./views/login2.vue'));
        });
    },
    meta: {
        showInSidebar: false,
        title: 'login'
    }
}, {
    path: '/apiii',
    name: 'apiii',
    component(resolve) {
        require.ensure(['./views/children.vue'], () => {
            resolve(require('./views/children.vue'));
        });
    },
    meta: {
        showInSidebar: true,
        title: '查询账号信息',
        icon: '#icon-hills__easyiconnet'
    },
    children: [
        {
            path: 'account',
            name: 'account',
            component(resolve) {
                require.ensure(['./views/account.vue'], () => {
                    resolve(require('./views/account.vue'));
                });
            },
            meta: {
                title: '查询1',
                icon: '#icon-train__easyiconnet'
            }
        },
        {
            path: '/lookupAccount',
            name: 'apiAccount2',
            component(resolve) {
                require.ensure(['./views/account.vue'], () => {
                    resolve(require('./views/account.vue'));
                });
            },
            meta: {
                title: '查询2',
                icon: '#icon-tornado__easyiconnet'
            }
        },
        {
            path: '/lookupAccount',
            name: 'apiAccount3',
            component(resolve) {
                require.ensure(['./views/account.vue'], () => {
                    resolve(require('./views/account.vue'));
                });
            },
            meta: {
                title: '查询3',
                icon: '#icon-tractor__easyiconnet'
            }
        }
    ]
}, {
    path: '*',
    component: Home,
    meta: {
        showInSidebar: false,
        title: '主页'
    }
}];

export default routers;