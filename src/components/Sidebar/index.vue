<template>
  <div id="sidebar">
    <template v-for="(route, index) in routes">
      <div v-if="route.children">
        <a :href="'#panel'+index"
          class="btn btn-default btn-block"
          data-toggle="collapse" data-parent="#sidebar" >
          <i :class="route.meta.icon"  class="m-l-10"></i>
          {{ route.meta.title }}
          <span class="caret"></span>
        </a>
        <div :id="'panel'+index" class="collapse w-90p m-0-auto">
          <link2 v-for="subRoute in route.children"
            :path="route.path+'/'+subRoute.path"
            :title="subRoute.meta.title"
            :icon="subRoute.meta.icon">
            {{$route.path+subRoute.path}}
          </link2>
        </div><!-- .collapse -->
      </div><!-- v-if -->
      <link2 v-else
        :path="route.path"
        :title="route.meta.title"
        :icon="route.meta.icon"
        :is-exact="true">
      </link2>
    </template>
  </div><!-- #sidebar -->
</template>
<script>
import $ from 'jquery';
import Link2 from './Link';
import routersArr from 'src/routers';
import _filter from 'lodash/filter';

export default {
    components: { Link2 },
    computed: {
        routes: function () {
            return _filter(routersArr, route => route.meta.showInSidebar);
        }
    },
    watch: {
        '$route.path' () {
            this.expand();
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.expand();
        });
    },
    methods: {
        // 若当前位置是二级路由，则自动展开折叠
        expand () {
            $(this.$el).find('a.matched-route').parents('div.collapse').collapse('show');
        }
    }
};
</script>
<style>
.w-90p {
  width: 90%;
}
.m-l-10 {
  margin: 0px 0px 0px 20px;
}
</style>
