<template>
    <section id="sideBar" class="nav-list" :class="{'show':showMenu}">
        <user-info></user-info>
        <section class="list-ul">
            <router-link class="item" :to="{'name':'list',query:{tab:'all'}}">
            <svg class="icon svg" aria-hidden="true">
                <use xlink:href="#icon-lake__easyiconnet1"></use>
            </svg>
            全部
            </router-link>
            <router-link class="item" :to="{'name':'list',query:{tab:'good'}}">
            <svg class="icon svg" aria-hidden="true">
                <use xlink:href="#icon-lagoon__easyiconnet1"></use>
            </svg>
            精华
            </router-link>
            <router-link class="item" :to="{'name':'list',query:{tab:'share'}}">
            <svg class="icon svg" aria-hidden="true">
                <use xlink:href="#icon-lake__easyiconnet"></use>
            </svg>
            分享
            </router-link>
            <router-link class="item" :to="{'name':'list',query:{tab:'ask'}}">
            <svg class="icon svg" aria-hidden="true">
                <use xlink:href="#icon-iceberg__easyiconnet"></use>
            </svg>
            问答
            </router-link>
            <router-link class="item" :to="{'name':'list',query:{tab:'job'}}">
            <svg class="icon svg" aria-hidden="true">
                <use xlink:href="#icon-hotel__easyiconnet"></use>
            </svg>
            招聘
            </router-link>
            <router-link class="item line" :to="{'name':'message'}">
            <svg class="icon svg" aria-hidden="true">
                <use xlink:href="#icon-lagoon__easyiconnet"></use>
            </svg>
            消息
            </router-link>
            <router-link class="item" :to="{'name':'about'}">
            <svg class="icon svg" aria-hidden="true">
                <use xlink:href="#icon-hunting__easyiconnet"></use>
            </svg>
            关于
            </router-link>
            <router-link class="item" :to="{'path':'/api/lookupAccount'}">
            <svg class="icon svg" aria-hidden="true">
                <use xlink:href="#icon-haunted_house__easyiconnet"></use>
            </svg>
            账号信息
            </router-link>
        </section>
       <sub-sidebar></sub-sidebar>
    </section>
</template>
<script>
    export default {
        replace: true,
        props: ['showMenu', 'pageType', 'nickName', 'profileUrl'],
        components: {
            'userInfo': require('./user-info.vue'),
            'subSidebar': require('./Sidebar/index.vue')
        }
    };
</script>

<style lang="scss">
    /*侧边栏*/
    
    .nav-list {
        position: fixed;
        top: 0;
        bottom: 0;
        left: -200px;
        width: 200px;
        background-color: #fff;
        color: #313131;
        transition: all .3s ease;
        z-index: 99;
        &.show {
            transform: translateX(200px);
        }
    }

   
    /*侧边栏列表*/
    
    .list-ul {
        margin: 0 24px;
        border-top: 1px solid #d4d4d4;
        overflow: hidden;
        padding-top: 9%;
        .item {
            display: block;
            font-size: 14px;
            font-weight: 200;
            padding: 9% 0;
            text-align: left;
            text-indent: 1px;
            line-height: 15px;
            color: #313131;
            font-weight: 700;
            &:last-child {
                margin-bottom: 50px;
            }
            &:before {
                color: #2c3e50;
            }
        }
        .line {
            border-top: 1px solid #d4d4d4;
        }
    }
.svg {
    margin-right: 30px;
    front-size: 16px;
}
</style>