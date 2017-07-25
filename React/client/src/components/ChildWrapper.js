import React from 'react'
import ChildPics from './ChildPics'

class ChildWrapper extends React.Component {

  render() {


    var photoToRender = this.props.tasks.map((picture, index) => {
      return <ChildPics pic={picture} index={index} key={index} handleOnClick={this.props.handleOnClick} />
    })

    return(
      <div id="childWrapper">
        {photoToRender}
      </div>
      )

  }
}
export default ChildWrapper
