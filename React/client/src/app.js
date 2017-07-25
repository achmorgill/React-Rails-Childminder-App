import React from 'react';
import ReactDOM from 'react-dom';
import MainPageContainer from './containers/MainPageContainer';
import navComponent from "./components/NavComponent";
import Profiles from './components/Profiles';
import Content from './components/Content'
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
        <Route path='/content' component={Content}/>
       </div>
    </Router>,
    document.getElementById('app')
  );
});
