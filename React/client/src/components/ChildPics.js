import React from 'react'

class ChildPics extends React.Component {

  onPhotoClick() {
    console.log("index", this.props.index)
    this.props.handleOnClick(this.props.index)
  }

  render() {
    return(
      <div className="task-photo">
        <img className="task-image" src={this.props.task.image} onClick={this.onPhotoClick.bind(this)} />
      </div>
      )

  }
}
export default ChildPics
