## 简介
本项目使用技术栈 
vue vuex vue-resource vue-router mysql2 jwts express 等,
框架已经基本完成, 但一些细节并没有详细去调整，比如一些按钮的功能。
game server: https://github.com/hbcrhythm/np
h5   client: https://github.com/hbcrhythm/EgretGameEngine

###安装

项目地址：（`git clone`）

```shell
git clone https://github.com/shinygang/Vue-cnodejs.git
```

通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```

启动服务(http://localhost:8020)

```
npm run dev
```

发布代码
```
npm run build
```

###开发

###目录结构
<pre>
.
├── README.md           
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── mock               // 服务端目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // css js 和图片资源
│   ├── components     // 各种组件
│   ├── views          // 各种页面
│   ├── vuex           // vuex状态管理器
│   ├── filters.js     // 各种过滤器
│   └── main.js        // Webpack 预编译入口
</pre>


