import React from 'react'

class ChildPics extends React.Component {

  onPhotoClick() {
    this.props.handleOnClick(this.props.index)
  }

  render() {
    return(
      <div className="task-photo">
        <img className="task-image" src={this.props.tasks.image} onClick={this.onPhotoClick.bind(this)} />
      </div>
      )

  }
}
export default ChildPics
