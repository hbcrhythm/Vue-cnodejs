<template>
    <div>
        <div class="page-cover"
                v-if="show&&fixHead"
                @click="showMenus">
        </div>
        <header :class="{'show':show&&fixHead,'fix-header':fixHead,'no-fix':!fixHead}" id="hd">
            <div class="nv-toolbar">
                <div class="toolbar-nav"
                        @click="openMenu"
                        v-if="fixHead">
                </div>
                <div class="icon-about iconfont"
                        @click="openServerMenu"
                        v-if="fixHead">
                </div>
                <span v-text="pageType"></span>
                <i class="num" v-if="messageCount > 0"> {{messageCount}}</i>
                <div class="dropdown m-r-50">  
                    <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false"  >
                        {{nickname}}                    
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu min-d-m" aria-labelledby="dropdownMenu1">
                        <li><a @click="logout">Logout</a>
                        </li>
                      </ul>
                </div>
                <div>
                <router-link to="/add">
                    <i v-if="needAdd" v-show="!messageCount || messageCount <= 0"
                        class="iconfont add-icon">&#xe60f;</i>
                </router-link>
                </div>
            </div>
        </header>
        <nv-menu :show-menu="show"
            :page-type="pageType"
            :nick-name="nickname"
            :profile-url="profileimgurl"
            v-if="fixHead" ></nv-menu>
        <server-lists :show-menu="showServerMenu">
        </server-lists>
    </div>
</template>

<script>
    import $ from 'webpack-zepto';
    export default {
        replace: true,
        props: {
            pageType: String,
            fixHead: Boolean,
            messageCount: Number,
            needAdd: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                nickname: this.$store.getters.getUserInfo.username,
                profileimgurl: '',
                show: false,
                showServerMenu: false
            };
        },
        methods: {
            openMenu() {
                $('html, body, #page').addClass('scroll-hide');
                this.show = !this.show;
            },
            showMenus() {
                this.show = !this.show;
                this.showServerMenu = false;
                $('html, body, #page').removeClass('scroll-hide');
            },
            openServerMenu() {
                this.showServerMenu = !this.showServerMenu;
                $('html, body, #page').addClass('scroll-hide');
            },
            logout() {
                this.$root.$options.render = h => h({});
                this.$store.dispatch('setUserInfo', {});
                this.$router.push({ path: '/login2' });
            }
        },
        components: {
            'nvMenu': require('./menu.vue'),
            'serverLists': require('./Serverlists.vue')
        }
    };
</script>
<style>
.m-r-50 {
    margin-right: 50px;
    white-space: nowrap;
}
.min-d-m {
    min-width: 88px;
    border: 0px;
    border: 0px solid rgba(0,0,0,0)
}
</style>