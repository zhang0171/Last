import React from 'react';
import img1 from '../img/Fan-tou-1.png';
import img2 from '../img/Fan-tou-2.png';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import Sy from './sy'
import Qyb from './qyb'
import Qj from './qj';
import Cj from './cj';
import Ding from './ding';
import Pz from './pz';
import Dian from './dian';
import Sjal from './sjal';
import $ from 'jquery';
const active={color:'red'};

class Change extends React.Component {
  one(){
    window.location.reload();
  }
  reg(){
      this.props.history.push('/reg')
  }
  render() {
    return (
      <div>
        <div className="Fan-tou">
           <div className='Fan-bu'>
             
             <Router>
               <div className='Fan-nav'>
                <div className='Fan-nav-1'>
                  <img className='Fan-bu-1' src={img1}/>
                  <div className='Fan-link'>
                  <Link className='Fan-zi-1' onClick={this.one.bind(this)} to='/change/sy' activestyle={active}>首页</Link>
                  <Link className='Fan-zi-2' onClick={this.one.bind(this)} to='/change/qyb' activestyle={active}>企业版介绍</Link>
                  <Link className='Fan-zi-3' onClick={this.one} to='/change/qj' activestyle={active}>全屋定制</Link>
                  <Link className='Fan-zi-4' onClick={this.one} to='/change/cj' activestyle={active}>橱柜工具</Link>
                  <Link className='Fan-zi-5' onClick={this.one} to='/change/ding' activestyle={active}>吊顶工具</Link>
                  <Link className='Fan-zi-6' onClick={this.one} to='/change/pz' activestyle={active}>铺砖工具</Link>
                  <Link className='Fan-zi-7' onClick={this.one} to='/change/dian' activestyle={active}>到店购</Link>
                  <Link className='Fan-zi-8' onClick={this.one} to='/change/sjal' activestyle={active}>商家案例</Link>
                  <i style={{'color':'pink'}} onClick={this.reg.bind(this)}>
                      登录
                  </i>
                  </div>
                  <img className='Fan-bu-2' src={img2}/>
                  <span className='Fan-zi'>
                    0571-28070168
                  </span>
                </div>
               
              </div>
             </Router> 
           </div>
        </div>
        

        {/* <session> */}
          <Router>
          <div className='Fan-666'>
              <Route path='/change/sy' component={Sy}></Route>
              <Route path='/change/qyb' component={Qyb}></Route>
              <Route path='/change/qj' component={Qj}></Route>
              <Route path='/change/cj' component={Cj}></Route>
              <Route path='/change/ding' component={Ding}></Route>
              <Route path='/change/pz' component={Pz}></Route>
              <Route path='/change/dian' component={Dian}></Route>
              <Route path='/change/sjal' component={Sjal}></Route>
          </div>  

          </Router>

        {/* </session> */}

        <footer>
          <span>关于我们 </span>
          <span>| 联系我们</span>
        </footer>
      </div>
    );
  }
}

export default Change;
