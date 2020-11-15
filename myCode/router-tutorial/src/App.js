import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import About from './component/About'
import Home from './component/Home'
import Profile from './component/Profile'
import Profiles from './component/Profiles'
import HistorySample from './component/HistorySample'


function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">Profile</Link>
        </li>
        <li>
          <Link to="/history">History Example</Link>
        </li>
      </ul>
      <hr />
      <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About}/>
      <Route path="/profiles" component={Profiles}/>
      <Route path="/history" component={HistorySample}/>
      <Route render={({location})=>(
        <div>
          <h2>404 Error</h2>
      <p>{location.pathname}</p>
        </div>
      )} />
      </Switch>
    </div>

  );
}

export default App;
