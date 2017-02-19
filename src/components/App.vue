<template>
    <!--- 这里用的变量必须为顶级变量 --->
	<div>
    <nv-head :page-type="$route.meta.title"
            ref="head"
            :fix-head="true"
            :need-add="true"
            :show-menu="showMenu"
            :message-count="messageCount">
    </nv-head>
    <div class="row m-0">
        <div class="col-md-3">
            <summary2></summary2>
        </div>
        <div class="col-md-9">
            <breadcrumb class="m-t-m-70-50"></breadcrumb>
            <router-view></router-view>                
        </div>
    </div>
    <nv-top></nv-top>
    </div>
</template>
<script>
import nvHead from './header.vue';
import nvTop from './backtotop.vue';
import summary2 from './summary.vue';
import breadcrumb from './Breadcrumb.vue';

export default {
    // 注意：顶级变量必须设置默认值才能引入 observer
    data() {
        return {
            pageType: '青春',
            showMenu: false,
            messageCount: 0
        };
    },
    components: {
        nvHead,
        nvTop,
        summary2,
        breadcrumb
    },
    watch: {
        // 切换页面
        $route: function (to, from) {
            this.$refs.head.show = false;
        }
    }
};
</script>
<style>
.main-content {
  min-height: 300px;
  background-color: #f7f7f7;
  border-radius: 5px;
}
.m-t-m-70-50 {
    margin: 70px;
}
</style>