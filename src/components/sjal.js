

import React from 'react';
import '../csszxm/syal.css';
import $ from 'jquery'
import '../datazxm/a';
import { Modal, Button,message} from 'antd';

import { Input } from 'antd';

import Mock from 'mockjs';//标准写法
import b from '../datazxm/b'//标准写法
import c from '../datazxm/c'//标准写法
import d from '../datazxm/d'//标准写法
import e from '../datazxm/e'//标准写法


Mock.mock('http://www.baidu.com/bb',b)
Mock.mock('http://www.baidu.com/cc',c)
Mock.mock('http://www.baidu.com/dd',d)
Mock.mock('http://www.baidu.com/ee',e)



class Sjal extends React.Component{
    constructor(props){
        super(props)
        this.state={
        	visible: false
        }
    }
     showModal = () => {
	    this.setState({
	      visible: true,
	    });
	  }
	
	  hideModal = () => {
	    this.setState({
	      visible: false,
	    });
	  }
	  use(){
	  	this.showModal()
	  	
	  }
	 
	  commit(){
	  	var mingcheng=this.refs.mingcheng.value
	  	var hangye=this.refs.hangye.value
	  	var xingming=this.refs.xingming.value
	  	var phone=this.refs.phone.value
	  	if(mingcheng==''){
	  		//this.warning()
			alert("请输入您的企业名称")
	  	}else{
	  		if(hangye==''){
	  		//this.warning()
	  		alert("请输入您的行业")
	  		}else{
	  			if(xingming==''){
	  				//this.warning()
	  				alert("请输入您的姓名")
	  			}else{
	  				if(phone==''){
	  					//this.warning()
	  					alert("请输入您的电话号码")
	  				}else{
	  					this.hideModal()
	  					
	  					this.refs.mingcheng.value=''
	  					this.refs.hangye.value=''
	  					this.refs.xingming.value=''
	  					this.refs.phone.value=''
	  				}
	  			}
	  		}
	  	}
	  	
	  }
	  warning() {
		  Modal.warning({
		    title: 'This is a warning message',
		    content: 'some messages...some messages...',
		  });
		}
    render(){
        return(
              <div>
              	{/* <Button type="primary" onClick={this.showModal} >Modal</Button>*/}
			        <Modal
			          
			          visible={this.state.visible}
				          onOk={this.hideModal}
				          onCancel={this.hideModal}
				          okText="确认"
				          cancelText="取消"
				          footer={null}
			        >
			          <div class='ttop' >
			          	<h3>申请试用</h3>
			          	<p>提交真实有效的信息，可获得企业版体验机会</p>
			          </div>
			          <div class='tmiddle'>
			          		<Input placeholder="您的企业名称"  ref='mingcheng'/>
			          		<Input placeholder="您的行业" ref='hangye'/>
			          		<Input placeholder="您的姓名" ref='xingming'/>
			          		<Input placeholder="您的手机号" ref='phone'/>
			          		<input type="button" value='提交信息' onClick={this.commit.bind(this)}/>
			          </div>
			          <div class='tbottom'>
			          		<p >商务合作电话</p>
			          		<p>0571-28070163</p>
			          </div>
			          
			        </Modal>
              
              
              
              
            		<div className="content"><img src='//qhyxpicoss.kujiale.com/2017/03/07/LC7HFJAKAEDGUNIDAAAAACQ8_1920x480.jpg'/></div>
            		<div className="nav">
            			<ul className="louti">
            				<li><a href="###"><span className="iconfont icon-kongtiao"></span>装修公司</a></li>
            				<li><a href="###"><span className="iconfont icon-shafa"></span>装修企业</a></li>
            				<li><a href="###"><span className="iconfont icon-chuanghu"></span>硬装企业</a></li>
            				<li><a href="###"><span className="iconfont icon-men"></span>定制企业</a></li>
            			</ul>
            		</div>
            		<div className="VR">
            			<p>酷家乐正在帮助2000+个品牌 开启VR全景家居未来</p>
            		</div>
            		<div className="xiantiao">
            			<span></span>
            			<span></span>
            			<span></span>
            		</div>
            		<div className="sunwei ">
            			<div className="stop stop1">
            				
            			</div>
            			<div className="smiddle">
            				<ul className="a1">
            					
            				</ul>
            			</div>
            			<div className="sbutton">
            				<span onClick={this.use.bind(this)}>免费试用</span>
            			</div>
            		</div>
            		<div className="sunwei liuhong" style={{background:'white'}}>
            			<div className="stop stop2">
            			
            			</div>
            			<div className="smiddle">
            				<ul className="a2">
            					
            				</ul>
            			</div>
            			<div className="sbutton">
            				<span onClick={this.use.bind(this)}>免费试用</span>
            			</div>
              		</div>  
              
              
              
            		<div className="sunwei wuxingjie">
            			<div className="stop stop3">
            			</div>
            			<div className="smiddle">
            				<ul className="a3">
            					
            				</ul>
            			</div>
            			<div className="sbutton">
            				<span onClick={this.use.bind(this)}>免费试用</span>
            			</div>
            		</div>
            		
            		<div className="sunwei last">
            			<div className="stop stop4">
            				
            			</div>
            			<div className="smiddle">
            				<ul className="a4">
            					
            				</ul>
            			</div>
            			<div className="sbutton">
            				<span onClick={this.use.bind(this)}>免费试用</span>
            			</div>
            		</div>
        </div>
        )
    }
    componentDidMount(){
    	window.onload=function(){
    		$('.ant-modal-footer').remove();
    	}
    			
    			var $floor1 = $(".nav");
				var flag=true;
				$(window).scroll(function(){
						var scrollTop = $(this).scrollTop();
						var scrollTop1 = $(".content").offset().top;
						if(scrollTop>=scrollTop1+580){
							$(".nav").css({"position":"fixed","top":0})
						}else{
							$(".nav").css({"position":"relative"})
						}
						if(flag){
							$(".sunwei").each(function(){
							var index=$(this).index();
							index-=4;
							//console.log(index)
							if(scrollTop>$(this).offset().top-$(this).outerHeight()/2){
								$(".louti li").eq(index).children().css({color:'blue'}).addBack().siblings().children().css({color:'black'});
						}
						})
					}
				})
				$(".louti li").click(function(){
					var index=$(this).index();
					flag=false;
					$(this).children().css({color:'blue'}).addBack().siblings().children().css({color:'black'});
					$("html,body").animate({"scrollTop":$(".sunwei").eq(index).offset().top},500,function(){
						flag=true;
					});
				})
		
$.ajax({
	type:"get",
	url:"http://www.baidu.com/aa",
	async:true,
	dataType:'json',
	success:function(data){
		var str=''
		str=`<span class="kongbai"><img src='//qhyxpicoss.kujiale.com/2017/03/01/LC3GLEYKAEDGUE52AAAAABY8_343x260.png'/></span>
				<div class="dsz">
					<div class="name">
    					<span>${data.user.name}</span>
    					<span>${data.user.title}</span>
					</div>
    				<div class='wenzi'>
    					<p>${data.user.text}</p>
    				</div>
            </div>`
		$('.stop1').html(str)
		
	}
});
$.ajax({
	type:"get",
	url:"http://www.baidu.com/aa",
	async:true,
	dataType:'json',
	success:function(data){
		var str=''
		str=`<span class="kongbai"><img src='//qhyxpicoss.kujiale.com/2017/03/01/LC3GLEYKAEDGUE52AAAAABI8_343x260.png'/></span>
				<div class="dsz">
					<div class="name">
    					<span>${data.user.name}</span>
    					<span>${data.user.title}</span>
					</div>
    				<div class='wenzi'>
    					<p>${data.user.text}</p>
    				</div>
            </div>`
		$('.stop2').html(str)
		
	}
});
$.ajax({
	type:"get",
	url:"http://www.baidu.com/aa",
	async:true,
	dataType:'json',
	success:function(data){
		var str=''
		str=`<span class="kongbai"><img src='//qhyxpicoss.kujiale.com/2017/03/01/LC3GLEYKAEDGUE52AAAAABQ8_343x260.png'/></span>
				<div class="dsz">
					<div class="name">
    					<span>${data.user.name}</span>
    					<span>${data.user.title}</span>
					</div>
    				<div class='wenzi'>
    					<p>${data.user.text}</p>
    				</div>
            </div>`
		$('.stop3').html(str)
		
	}
});
$.ajax({
	type:"get",
	url:"http://www.baidu.com/aa",
	async:true,
	dataType:'json',
	success:function(data){
		var str=''
		str=`<span class="kongbai"><img src="//qhyxpicoss.kujiale.com/2017/03/01/LC3GLEYKAEDGUE52AAAAABA8_343x260.png" alt="定制企业"></span>
				<div class="dsz">
					<div class="name">
    					<span>${data.user.name}</span>
    					<span>${data.user.title}</span>
					</div>
    				<div class='wenzi'>
    					<p>${data.user.text}</p>
    				</div>
            </div>`
		$('.stop4').html(str)
		
	}
});
$.ajax({
	type:"get",
	url:"http://www.baidu.com/dd",
	dataType:'json',
	success:function(data){
		var str=''
		data.user.map((item)=>{
			str+=`<li>
				<div class="smiddle-1"><img src='//qhyxpicoss.kujiale.com/2017/03/02/LC3X5IYKAEDGUBHOAAAAAAI8_280x165.jpg'></div>
				<div class="smiddle-2"> 
					<p>${item.title1}</p>
					<p>
						<span>${item.title2}</span>
						<span>${item.title3}</span>
					</p>
					<p>应用场景：${item.title4}</p>
					<p>
                    	${item.text}
                	</p>
				</div>
			</li>`
		})
		
		$('.a1').html(str)
		
	}
});
$.ajax({
	type:"get",
	url:"http://www.baidu.com/cc",
	dataType:'json',
	success:function(data){
		var str=''
		data.user.map((item)=>{
			str+=`<li>
				<div class="smiddle-1"><img class="logo fl" src="//qhyxpicoss.kujiale.com/2017/03/02/LC3X5IYKAEDGUBHOAAAAAAA8_280x165.jpg" alt="班尔奇"></div>
				<div class="smiddle-2"> 
					<p>${item.title1}</p>
					<p>
						<span>${item.title2}</span>
						<span>${item.title3}</span>
					</p>
					<p>应用场景：${item.title4}</p>
					<p>
                    	${item.text}
                	</p>
				</div>
			</li>`
		})
		
		$('.a2').html(str)
		
	}
});
$.ajax({
	type:"get",
	url:"http://www.baidu.com/bb",
	dataType:'json',
	success:function(data){
		var str=''
		data.user.map((item)=>{
			str+=`<li>
				<div class="smiddle-1"><img class="logo fl" src="//qhyxpicoss.kujiale.com/2017/03/02/LC3X5IYKAEDGUBHOAAAAAAQ8_280x165.jpg" alt="乐宜嘉"></div>
				<div class="smiddle-2"> 
					<p>${item.title1}</p>
					<p>
						<span>${item.title2}</span>
						<span>${item.title3}</span>
					</p>
					<p>应用场景：${item.title4}</p>
					<p>
                    	${item.text}
                	</p>
				</div>
			</li>`
		})
		
		$('.a3').html(str)
		
	}
});
$.ajax({
	type:"get",
	url:"http://www.baidu.com/ee",
	dataType:'json',
	success:function(data){
		var str=''
		data.user.map((item)=>{
			str+=`<li>
				<div class="smiddle-1"><img class="logo fl" src="//qhyxpicoss.kujiale.com/2017/03/02/LC3X5IYKAEDGUBHOAAAAAAY8_280x165.jpg" alt="宜和宜美"></div>
				<div class="smiddle-2"> 
					<p>${item.title1}</p>
					<p>
						<span>${item.title2}</span>
						<span>${item.title3}</span>
					</p>
					<p>应用场景：${item.title4}</p>
					<p>
                    	${item.text}
                	</p>
				</div>
			</li>`
		})
		
		$('.a4').html(str)
		
	}
});





    }
   
    
    
    
    
    
}

export default Sjal;













