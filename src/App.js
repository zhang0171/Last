import React from 'react';
import img1 from './img/Fan-tou-1.png';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import Sy from './components/sy'
import Qyb from './components/qyb'
import Qj from './components/qj';
import Cj from './components/cj';
import Ding from './components/ding';
import Pz from './components/pz';
import Dian from './components/dian';
import Sjal from './components/sjal';


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="Fan-tou">
           <div className='Fan-bu'>
             <img className='Fan-bu-1' src={img1}/>
             <Router>
             <div>
                <div className='Fan-nav'>
                <Link to='/sy'>首页</Link>
                <Link to='/qyb'>企业版介绍</Link>
                <Link to='/qj'>全屋定制</Link>
                <Link to='/cj'>橱柜工具</Link>
                <Link to='/ding'>吊顶工具</Link>
                <Link to='/pz'>铺砖工具</Link>
                <Link to='/dian'>到店购</Link>
                <Link to='/sjal'>商家案例</Link>
                </div>
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
              
             
             <img />
           </div>
        </div>
        
        {/* <div>尾部</div> */}
      </div>
    );
  }
}

export default App;
