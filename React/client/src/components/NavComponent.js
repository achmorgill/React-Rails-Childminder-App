import React from 'react';
import {Link} from 'react-router-dom'

class NavComponent extends React.Component {

  navToggle() {
    console.log("you are in navToggle")
    }

  render() {

    return(

      <div className="nav-wrapper">
        <div className="nav home"><Link to="/">Home</Link></div>
        <div className="nav tasks"><Link to="/tasks">Select Child</Link></div>
        <div className="nav contact"><Link to="/contact">Contact</Link></div>
      </div>
      )
  }
}
export default NavComponent
