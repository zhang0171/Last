import Mock from 'mockjs'

var c=Mock.mock({
	"user|5":[
	{ 
		"title1":"@ctitle(3,4)",
		"title2":"@ctitle(3,5)",
		"title3":"@ctitle(3,5)",
		"title4":"@ctitle(5,8)",
		"text":"@csentence(30,40)"//随机生成一个中文文本
	}
	]
})
export default c;