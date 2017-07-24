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
        <Link to="/profiles"><div className="nav profiles">Profiles</div></Link>
        <div className="nav tasks">Tasks</div>
        <div className="nav contact">Contact</div>
      </div>
      )
  }
}
export default NavComponent
