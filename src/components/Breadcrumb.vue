<template>
	<ol class="breadcrumb clearfix m-0-auto">
		<i class="icon-about1 iconfont "></i>
		<li v-for="(route, index) in matchedRoutes" class="m-t-8" :class="{'active': index === matchedRoutes.length - 1}">
			<span v-if="index === matchedRoutes.length - 1">
				{{route.meta.title}}
			</span>
			<router-link v-else :to="route.path">
				{{route.meta.title}}
			</router-link>
		</li>
		<button @click="refresh" class="btn btn-default btn-xs pull-right">
			<i class="icon-about1 iconfont m-r-5"> </i>
			强制刷新
		</button>
		<button @click="back" class="btn btn-default btn-xs pull-right">
			<i class="icon-about1 iconfont m-r-5"> </i>
			返回
		</button>
	</ol>
</template>
<script>
import utils from '../libs/utils';

export default {
    computed: {
        matchedRoutes () {
            return this.$route.matched.slice();
        }
    },
    methods: {
        refresh () {
            let curPath = utils.trimQs(this.$route.path);
            this.$router.push({path: '/redirect', query: {dest: curPath}});
        },
        back () {
            history.back();
        }
    }
};
</script>
<style>
.m-t-8 {
	margin-top: 8px;
}
</style>