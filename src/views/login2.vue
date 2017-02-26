<template>
  <div class="col-sm-4 sol-sm-offset-4 m-t-w-f-m" >
  	<div class="alert alert-danger " v-if="error">
  		<p>{{ error }}</p>
  	</div>
    <h1 class="h1">NP登陆</h1>
  	<div class="form-group ">
  		<input type="text" class="form-control" v-model="credentials.username" placeholder="请输入用户名">
  	</div>
  	<div class="form-group ">
  		<input type="password" class="form-control" v-model="credentials.password" placeholder="请输入用户名">
  	</div>
  	<button class="btn btn-primary" @click="submit()">登陆</button>
  </div>
</template>

<script>
// import App from 'components/app.vue';
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
            this.$auth.login({
                body: credentials,
                success(Params) {
                    this.$store.dispatch('setShowApp', true);
                    this.$store.dispatch('setUserInfo', this.$auth.user());
                  // this.$root.$options.render = h => h(App);
                },
                error(res) {
                    console.log('error ', res);
                    this.error = res.data.errMsg;
                }
            });
            // this.$http.post('/auth/login', credentials).then(response => {
            //    this.$root.$options.render = h => h(App);
            //    credentials.id_token = response.body.data.id_token;
            //    this.$store.dispatch('setUserInfo', credentials);
            //    this.$router.push({ path: '/' });
            // }, response => {
            //    console.log(response);
            //    this.error = response.body.data;
            // });
            // auth.login(this, credentials, 'secretquote')
        }
    }
};
</script>
<style>
.m-t-w-f-m {
	margin: auto;
  text-align: center;
  width: 33%;
  float: none;
  margin-top: 10%
}
.h1 {
  front-size: xx-large
}
</style>
