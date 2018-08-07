import React from 'react';
import '../Fan-css/reg.css'
class Reg extends React.Component{
    constructor(props){
        super(props)
    }
    log(){
      this.props.history.push('/login')

    }
    render(){
        return(
            <div>
              <div className='Fan-all'>
                <div className='Fan-allson'>
                    <div className='Fan-allHd'>
                      <h2 className='Fan-Hd-1'>酷家乐</h2>
                      <span className='Fan-Hd-2'>虚拟体验馆</span>
                    </div>

                    <div className='Fan-allBody'>
                      <div className='Fan-allBody-left'>
                       <img src='//qhyxpicoss.kujiale.com/2016/07/26/K6LRUOAKAEDGUWG2AAAAAAY8_740x400.jpg' />
                      </div>
                      <div className='Fan-allBody-right'>
                        <div className='Fan-r-1'>
                            <span>登录</span>
                            <span style={{'font-size':'14px','color':'#596780'}}>没有账号?<a onClick={this.log.bind(this)} className='Fan-ah' style={{'font-size':'14px','color':'#3e82f7','font-weight':'100'}}>申请入驻></a></span>
                        </div>
                        <div className='Fan-r-2'>
                            <div className='Fan-ipt1'>
                              <div className='Fan-ico'>
                                  <i className='iconfont icon-shiming'></i>
                              </div>
                              <input className='Fan-ipt1-one' type='text' placeholder='请输入登录邮箱/手机号' /> 
                            </div>
                            <div className='Fan-ipt2'>
                              <div className='Fan-ico'>
                                  <i className='iconfont icon-lock'></i>
                              </div>
                              <input className='Fan-ipt1-one' type='password' placeholder='请输入密码' /> 
                            </div>
                            <div className='Fan-ipt3'>
                              <label>
                                <input type='checkbox' style={{'width':'19px','height':'19px'}} />
                                <span>记住账号</span>
                              </label>  
                            </div>  
                            <a style={{'display':'block','height':'46px','text-align':'center','line-height':'46px','font-size':'16px','background':'#3e82f7','color':'white'}}>登 录</a>
                        </div>
                      </div>
                    </div>
                </div>
              </div>


            </div>  
        )
    }
}

export default Reg;













