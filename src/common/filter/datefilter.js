/**
 * Created by wangyanqing on 2017/7/22.
 */

//时间过滤器

//引入vue
import Vue from 'vue'

//引入moment
import moment from 'moment'

export default Vue.filter('datefilter',function(data,format){
    //判断是否是字符串 function undefined
    if(Object.prototype.toString.call(data) === "[object String]"){

        //按照年月日 时分秒计算格式YYYY-MM-DD HH：mm:ss
        return moment(data).format(format||'YYYY-MM-DD HH:mm:ss');
    }else{
        return data;
    }



});














