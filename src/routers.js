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
    meta: { showInSidebar: false }
}, {
    path: '/cnodevue',
    name: 'cnodevue',
    component: Home,
    meta: { showInSidebar: false }
}, {
    path: '/list',
    name: 'list',
    component: List,
    meta: { showInSidebar: false }
}, {
    path: '/topic/:id',
    name: 'topic',
    component(resolve) {
        require.ensure(['./views/topic.vue'], () => {
            resolve(require('./views/topic.vue'));
        });
    },
    meta: { showInSidebar: false }
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
        showInSidebar: false
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
        showInSidebar: false
    }
}, {
    path: '/user/:loginname',
    name: 'user',
    component(resolve) {
        require.ensure(['./views/user.vue'], () => {
            resolve(require('./views/user.vue'));
        });
    },
    meta: { showInSidebar: false }
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
        icon: 'icon-about iconfont'
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
        showInSidebar: false
    }
}, {
    path: '/api',
    name: 'api',
    component(resolve) {
        require.ensure(['./views/account.vue'], () => {
            resolve(require('./views/account.vue'));
        });
    },
    meta: {
        showInSidebar: true,
        title: '查询账号信息',
        icon: 'icon-about iconfont'
    },
    children: [
        {
            path: '/lookupAccount',
            name: 'apiAccount',
            component(resolve) {
                require.ensure(['./views/account.vue'], () => {
                    resolve(require('./views/account.vue'));
                });
            },
            meta: {
                title: '查询1',
                icon: 'icon-about iconfont'
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
                icon: 'icon-about iconfont'
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
                icon: 'icon-about iconfont'
            }
        }
    ]
}, {
    path: '*',
    component: Home,
    meta: { showInSidebar: false }
}];

export default routers;