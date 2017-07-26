import React from 'react'
import ChildPics from './ChildPics'
import { Link } from 'react-router-dom'

class ChildWrapper extends React.Component {

  render() {


    var photoToRender = this.props.children.map((child, index) => {
      return <Link to="/profiles"><ChildPics child={child} index={index} key={index}  children={this.props.children}/></Link>
    })

    return(
      <div id="childWrapper">
        {photoToRender}
      </div>
      )

  }
}
export default ChildWrapper
