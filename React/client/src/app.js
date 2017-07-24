import React from 'react';
import ReactDOM from 'react-dom';
import MainPageContainer from './containers/MainPageContainer'
import navComponent from "./components/NavComponent"
import Profiles from './components/Profiles'
import {Router, Route} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()


window.addEventListener('load', function () {
  ReactDOM.render(
    <Router history={history}>
      <div>
        <Route exact path="/" component={MainPageContainer}/>
        <Route path="/" component={navComponent}/>
        <Route path='/profiles' component={Profiles}/>
       </div>
    </Router>,
    document.getElementById('app')
  );
});
