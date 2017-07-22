/**
 * Created by wangyanqing on 2017/7/22.
 */
//引入vue
import Vue from 'vue'

//引入App.vue
import App from './App.vue'

//引入mint-ui
import mint from 'mint-ui'
Vue.use(mint);
//引入mint-ui的样式
import '../node_modules/mint-ui/lib/style.css'

//创建路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//node 找模块 核心模块-》node_modules->自定义.js .json .node

//引入自定义时间过滤器
import datefilter from './common/filter/datefilter.js'
Vue.use(datefilter);

//vue 的 http 请求
import resource from 'vue-resource'
Vue.use(resource);

//移入每个页面
import home from './component/home/home.vue'
import goods from './component/goods/goods.vue'
import news from './component/news/news.vue'
import newsinfo from './component/news/newsinfo.vue'
import shoppingcar from './component/shoppingcar/shoppingcar.vue'
import settings from './component/settings/settings.vue'

//引入mui样式
import './static/css/mui.min.css'

//引入全局的样式（自定义的）
import './static/css/main.css'

//创建路由表
let router = new VueRouter({
    //路由切换以后的样式
    linkActiveClass:"mui-active",
    //路由
    routes:[
        //首页
        {path:'/home',component:home},
        //商品列表
        {path:'/goods',component:goods},
        //购物车
        {path:'/shoppingcar',component:shoppingcar},
        //设置
        {path:'/settings',component:settings},
        //新闻
        {path:'/news',component:news},
        //新闻详情
        {path:'/newsinfo',component:newsinfo}
    ]
});

new Vue ({
    el:"#view",
    router:router,
    render:function(created){
        return created(App);
    }
});
