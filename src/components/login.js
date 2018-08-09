import React from 'react';
import '../Fan-css/log.css'

class Login extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
              <div style={{'position':'absolute','width':'100%','height':'100%','background':'#3c3b4d'}}>
                  <div className='Fan-second-son'>
                    <div className='Fan-ss-1'></div>
                    <div className='Fan-ss-2'>
                      <div className='Fan-ss-kuang'>
                        <div style={{'text-align':'center','height':'44px','margin-bottom':'24px'}}>
                            <span style={{'font-size':'33px','color':'#666'}}>注册</span>
                        </div>
                        <div style={{'width':'100%','height':'auto','overflow':'hidden'}}>
                            <div className='Fan-ki'>
                              <input type='text' placeholder='请输入手机号'/>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>

              </div>  
        )
    }
}

export default Login;













