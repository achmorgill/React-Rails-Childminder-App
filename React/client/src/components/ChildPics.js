import React from 'react'

class ChildPics extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    console.log("option",this.props.option)  
    return(
      <div className="child-photo">
          <img className="child-image" src={this.props.child.image} value={this.props.child.name} onClick={this.props.handleOnClick} />
        <div className="liWrapper">
          <p>Name: {this.props.child.name}</p>
          <p>Address: {this.props.child.address}</p>
          <p>Date of Birth: {this.props.child.dob}</p>
          <p>Emergency Contact: {this.props.child.emergency_contact}</p>
          <p>Medical Notes: {this.props.child.medical}</p>
          </div>
      </div>
      )

  }
}
export default ChildPics
