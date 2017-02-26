<template>
  <router-link class="pd-20-ta-l btn btn-default btn-block m-t-0 vlink"
  :class="{ 'matched-route': path === curMatchedPath }" :to="vlinkContent">
     <svg class="icon" :class="{'icon-child': isChild }" aria-hidden="true">
          <use :xlink:href="icon"></use>
      </svg>
    {{ title }}
  </router-link>
</template>
<script>
import $ from 'jquery';

export default {
    props: {
        path: { type: String, required: true },
        title: { type: String, required: true },
        icon: { type: String, default: 'fa fa-link' },
        isExact: { type: Boolean, default: false },
        isChild: { type: Boolean, default: false }
    },
    computed: {
        curMatchedRoute () {
            const { matched } = this.$route;
            return matched[matched.length - 1] || '';
        },
        curMatchedPath () {
            return this.curMatchedRoute.path;
        },
        isDynamicPath () {
            return this.path.includes(':');
        },
        vlinkContent () {
            if (this.isDynamicPath) return;
            return { path: this.path, exact: this.isExact };
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            // if (!this.isDynamicPath) return;
            $(this.$el).on('click', () => $.toast({heading: '动态路由不可直接点击访问', icon: 'info', stack: false}));
        });
    }
};
</script>
<style>
.m-t-0 {
  margin-top: 0 !important;
}
.vlink:hover {
  color: orange;
  background-color: #3071a9;
}
.matched-route {
  color: #fff !important;
  background-color: #31b0d5 !important;
}
.pd-20-ta-l {
  padding-left: 20px;
  text-align: left;
}
.icon-r-2 {
  margin-right: 20px;
}

.icon-child {
  margin-right: 20px;
  margin-left: 15px;
}
</style>
