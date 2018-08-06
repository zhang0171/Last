import React from 'react';
import img1 from './img/Fan-tou-1.png';
import img2 from './img/Fan-tou-2.png';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import Sy from './components/sy'
import Qyb from './components/qyb'
import Qj from './components/qj';
import Cj from './components/cj';
import Ding from './components/ding';
import Pz from './components/pz';
import Dian from './components/dian';
import Sjal from './components/sjal';

const active={color:'red'}
class App extends React.Component {
  one(){
    window.location.reload();
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
                  <Link className='Fan-zi-1' onClick={this.one} to='/sy' activeStyle={active}>首页</Link>
                  <Link className='Fan-zi-2' onClick={this.one} to='/qyb'>企业版介绍</Link>
                  <Link className='Fan-zi-3' onClick={this.one} to='/qj'>全屋定制</Link>
                  <Link className='Fan-zi-4' onClick={this.one} to='/cj'>橱柜工具</Link>
                  <Link className='Fan-zi-5' onClick={this.one} to='/ding'>吊顶工具</Link>
                  <Link className='Fan-zi-6' onClick={this.one} to='/pz'>铺砖工具</Link>
                  <Link className='Fan-zi-7' onClick={this.one} to='/dian'>到店购</Link>
                  <Link className='Fan-zi-8' onClick={this.one} to='/sjal'>商家案例</Link>
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
        

        <session>
          <Router>
          <div className='Fan-666'>
              <Route path='/sy' component={Sy}></Route>
              <Route path='/qyb' component={Qyb}></Route>
              <Route path='/qj' component={Qj}></Route>
              <Route path='/cj' component={Cj}></Route>
              <Route path='/ding' component={Ding}></Route>
              <Route path='/pz' component={Pz}></Route>
              <Route path='/dian' component={Dian}></Route>
              <Route path='/sjal' component={Sjal}></Route>
          </div>  

          </Router>

        </session>

        {/* <div>尾部</div> */}
      </div>
    );
  }
}

export default App;
