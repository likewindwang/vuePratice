/**
 * Created by wangyanqing on 2017/7/22.
 */

//时间过滤器

//引入vue
import Vue from 'vue'

//引入moment
import moment from 'moment'

export default Vue.filter('datefilter',function(data,format){
    //按照年月日 时分秒计算格式YYYY-MM-DD HH：mm:ss
    return moment(data).format(format||'YYYY-MM-DD HH:mm:ss');
});


