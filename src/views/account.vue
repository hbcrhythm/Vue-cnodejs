<template>
    <div style="height: 100%;">      
        <dl class="about-info">

            <dt>这里是账号查询信息页面</dt>
            <dd><a href="javascript:;" @click="lookupAccount">查询</a></dd>
        
            <dt>源码地址</dt>
            
            <dd>
                <a href="https://github.com/shinygang/Vue-cnodejs">
                    https://github.com/shinygang/Vue-cnodejs</a>
            </dd>
            
            <dt>意见反馈</dt>
            <dd>
                <a href="https://github.com/shinygang/Vue-cnodejs/issues">
                    发表意见或者提需求</a>
            </dd>
            
            <dt>当前版本</dt>
            <dd>V2.0</dd>

        </dl>
    </div>
</template>
<script>
    import nvHead from '../components/header.vue';
    export default {
        methods: {
            lookupAccount() {
                this.$http.post('/api/lookupAccount', {foo: 'bar'}).then(response => {
                    console.log(response);
                }, response => {
                    console.log(response);
                    // error callback
                });
            }
        },
        components: {
            nvHead
        }
    };
</script>