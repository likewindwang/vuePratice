<template>
    <div>
        <!--头部-->
        <header class="mui-bar mui-bar-nav">
            <!--<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>-->
            <h1 class="mui-title">虹口道场</h1>
        </header>
        <!--内容-->
        <router-view></router-view>
        <!--导航-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/goods">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">商品</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shoppingcar">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/settings">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </router-link>
        </nav>
    </div>
    <!--<div>-->
    <!--<ul>-->
    <!--<li> <a href="#/">home</a></li>-->
    <!--<li> <a href="#/goods">goods</a></li>-->
    <!--<li> <a href="#/shoppingcar">shoppingcar</a></li>-->
    <!--<li> <a href="#/settings">settings</a></li>-->
    <!--</ul>-->
    <!--<div>-->
    <!--<router-view></router-view>-->
    <!--</div>-->
    <!--</div>-->
</template>
<style scopted>

</style>
<script>
    export default{
        data:function(){
            return{
                test:200
            }
        }
    }
</script>
