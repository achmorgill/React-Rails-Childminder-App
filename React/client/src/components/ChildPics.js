import React from 'react'

class ChildPics extends React.Component {

  constructor(props) {
    super(props)
  }

  onPhotoClick() {
    console.log("index", this.props.index)
    this.props.handleOnClick(this.props.index)
  }

  render() {
    return(
      <div className="child-photo">
        <img className="child-image" src={this.props.child.image} onClick={this.onPhotoClick.bind(this)} />
      </div>
      )

  }
}
export default ChildPics
