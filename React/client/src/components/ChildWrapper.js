import React from 'react'
import ChildPics from './ChildPics'
import { Link } from 'react-router-dom'
import EnterNewProfile from './EnterNewProfile'

class ChildWrapper extends React.Component {

  render() {


    var photoToRender = this.props.children.map((child, index) => {
      return <Link to='/tasks'><ChildPics child={child} index={index} key={index}  children={this.props.children} handleOnClick={this.props.handleOnClick}/></Link>
    })

    return(
      <div className="childWrapper">
        <div id="profile-div">
          {photoToRender}
        </div>
        <div id="new-profile-div">
          <EnterNewProfile children={this.props.children} handleOnClick={this.props.handleOnClick}/>
        </div>
      </div>
      )

  }
}
export default ChildWrapper
