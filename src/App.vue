<template>
    <div>
        <!--头部-->
        <header class="mui-bar mui-bar-nav">
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
</template>
<style scoped>
   
</style>
<script>
    export default{
        data(){
            return{
               test:200
            }
        }
    }
</script>
