<template>
    <div>
        <!--发表评论-->
        <div>
            <p>发表评论：</p>
            <textarea v-model="comments"></textarea>
            <mt-button @click="postcomments" type="danger" size="large">发表评论</mt-button>
        </div>
        <!--评论列表-->
        <ul class="mui-table-view">
            <li v-for="item in commentList" class="mui-table-view-cell">
                <p>评论时间：{{item.add_time|datefilter}}</p>
                <p>评论用户：{{item.user_name}}</p>
                <p>评论内容: {{item.content}}</p>
            </li>
        </ul>
        <div>
            <!--查看更多-->
            <mt-button @click="getmorecomments" type="primary" size="large">查看更多</mt-button>
        </div>
    </div>
</template>
<style scoped>
</style>
<script>
    //在当前组件中创建评论组件
    import api from '../../common/api/api.js'
    import { Toast } from 'mint-ui'
    export default{
        //如果属性是由外部传递过来的时候需要使用props接受
        //在使用过props中的属性不要再往data中添加同名属性
        props:["artid"],
        //data是处理当前组件的属性
        data(){
            return{
                pageindex:1,
                comments:'',
                commentList:[]
            }
        },
        methods:{
            postcomments(){
                //不为空的数据 添加到服务器上
                if(this.comments.trim().length>0){
                    //url地址
                    let url=`${api.apidomain}/api/postcomment/${this.artid}`;
                    //点击按钮发布评论
                    this.$http.post(
                        url,
                        {   //传输的数据
                            content:this.comments
                        },
                        {
                            //传输数据的格式
                            emulateJSON:true
                        })
                        .then(function (data) {
                            if(data.body.status!=0){
                                Toast('数据异常请联系管理员');
                                return;
                            }
                            //成功的信息
                            Toast(data.body.message);
                            //将提交成功的数据插入到commentList
                            this.commentList.unshift(
                                {
                                    "user_name": "匿名用户",
                                    "add_time": new Date(),
                                    "content": this.comments
                                }
                            );
                            //提交完信息后清空数据
                            this.comments='';


                        })
                }
                else{
                    Toast('评论信息不能为空哦！')
                }
            },
            //es6可以给方法添加默认值
            getcomments(pageindex=1){
                // console.log(pageindex);
                //url地址
                //http://182.254.146.100:8899/api/getcomments/13?pageindex=2
                let url=`${api.apidomain}/api/getcomments/${this.artid}?pageindex=${pageindex}`;

                //获取评论数据
                this.$http.get(url)
                    .then(data=>{
                        //判断数据是否异常
                        if(data.body.status!=0){
                            Toast('数据异常请联系管理员');
                            return;
                        }
                        //判断数据是否返回成功
                        //获取news新闻
                        this.commentList=this.commentList.concat(data.body.message);
                    },error=>{
                        //数据返回失败
                        Toast('数据异常请联系管理员');
                        //如果是公司还会有个异常数据提交的api
                    })
            },
            getmorecomments(){
                this.getcomments(this.pageindex++)
            },
        },
        created(){
            //一进入就要获取评论数据
            this.getcomments();
        }
    }
</script>
