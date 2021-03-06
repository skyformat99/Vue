import Vue from 'vue'
import Router from 'vue-router'

//首页
import Hello from '@/components/Hello'

//日报系列
import Daily from '@/components/Daily'
import groupDaily from '@/components/daily/groupDaily'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	component: Hello
    },
    {
    	path: '/daily',
    	component: Daily,
    	children: [ // 注意这里是数组 中括号
    		{
	          path: '',
	          component: groupDaily
	        },
    		{
	          // 当 /daily/group-daily 匹配成功，
	          // groupDaily 会被渲染在 Daily 的 <router-view> 中
	          path: 'group-daily',
	          component: groupDaily
	        }
    	]
    }
  ]
})
