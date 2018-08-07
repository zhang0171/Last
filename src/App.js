import React from 'react';
import img1 from './img/Fan-tou-1.png';
import img2 from './img/Fan-tou-2.png';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import Change from './components/change';
import Reg from './components/reg';
import Login from './components/login';


class App extends React.Component {


  render() {
    return (
      <div>
         <Router>
            <div>
              <Route path='/change' component={Change}>
              </Route>
              <Route path='/reg' component={Reg}></Route>
              <Route path='/login' component={Login}></Route>
              <Redirect to="/change/sy" />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
