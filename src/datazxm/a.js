import Mock from 'mockjs'

var Renwu=Mock.mock('http://www.baidu.com/aa',{
	"user|1":[
	{ 
		"id|+1":0,
		"name":"@cname",
		"title":"@ctitle(8,12)",//随机生成一个中文姓名
		"text":"@csentence(100,150)"//随机生成一个中文文本
	}
	]
})
export default Renwu;
