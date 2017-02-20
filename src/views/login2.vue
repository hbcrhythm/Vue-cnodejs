<template>
  <div class="col-sm-4 sol-sm-offset-4 top-30" >
  	<div class="alert alert-danger" v-if="error">
  		<p>{{ error }}</p>
  	</div>
  	<div class="form-group">
  		<input type="text" class="form-control" v-model="credentials.username" placeholder="请输入用户名">
  	</div>
  	<div class="form-group">
  		<input type="password" class="form-control" v-model="credentials.password" placeholder="请输入用户名">
  	</div>
  	<button class="btn btn-primary" @click="submit()">登陆</button>
  </div>
</template>

<script>
import App from 'components/app.vue';
export default {
    data() {
        return {
            credentials: {
                username: '',
                password: ''
            },
            error: ''
        };
    },
    methods: {
        submit() {
            var credentials = {
                username: this.credentials.username,
                password: this.credentials.password
            };
            credentials;
            this.$root.$options.render = h => h(App);
            this.$store.dispatch('setUserInfo', { userId: 1 });
            this.$router.push({ path: '/' });

            // auth.login(this, credentials, 'secretquote')
        }
    }
};
</script>
<style>
.top-30 {
	margin-top: 3cm;
}
</style>
