import React from 'react';
import ReactDOM from 'react-dom';
import MainPageContainer from './containers/MainPageContainer';
import navComponent from "./components/NavComponent";
import Profiles from './components/Profiles';
import Contact from './components/Contact'
import Girfec from './components/Girfec';
import Price from './components/Price';
import Tasks from './components/Tasks';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()


window.addEventListener('load', function () {
  ReactDOM.render(
    <Router history={history}>
      <div>
        <Route path='/' component={navComponent}/>
        <Route exact path="/" component={MainPageContainer}/>
        <Route path="/tasks" component={Tasks}/>
        <Route path='/profiles' component={Profiles}/>
        <Route path='/profiles' component={Girfec}/>
        <Route path='/profiles' component={Price}/>
        <Route path='/Contact' component={Contact}/>
       </div>
    </Router>,
    document.getElementById('app')
  );
});
