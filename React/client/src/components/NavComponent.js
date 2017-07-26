import React from 'react';
import {Link} from 'react-router-dom'

class NavComponent extends React.Component {


  render() {

    return(

      <div className="nav-wrapper">
      <h2 className="nursery-name">Harlequin Day Care</h2>
        <div className="nav home"><Link to="/">Home</Link></div>
        <div className="nav profile"><Link to="/profiles">Child Profiles</Link></div>
        <div className="nav girfec"><Link to="/girfec">GIRFEC</Link></div>
        <div className="nav prices"><Link to="/prices">Prices</Link></div>
        <div className="nav contact"><Link to="/contact">Contact</Link></div>
      </div>
      )
  }
}
export default NavComponent
