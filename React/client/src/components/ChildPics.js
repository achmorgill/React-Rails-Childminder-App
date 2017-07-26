import React from 'react'

class ChildPics extends React.Component {

  constructor(props) {
    super(props)
  }



  render() {
    return(
      <div className="child-photo">
        <img className="child-image" src={this.props.child.image} />
      </div>
      )

  }
}
export default ChildPics
