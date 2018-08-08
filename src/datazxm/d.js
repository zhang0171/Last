import Mock from 'mockjs'

var d=Mock.mock({
	"user|4":[
	{ 
		"title1":"@ctitle(3,4)",
		"title2":"@ctitle(3,5)",
		"title3":"@ctitle(3,5)",
		"title4":"@ctitle(5,8)",
		"text":"@csentence(30,40)"//随机生成一个中文文本
	}
	]
})
export default d;