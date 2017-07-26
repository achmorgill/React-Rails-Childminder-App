import React from 'react'

class EnterNewProfile extends React.Component {

  render() {

    return(

      <div className="new-profile-wrapper">

        <button onClick={this.props.handleOnClick}>Add Profile</button> 
      </div>
      )
  }
}
export default EnterNewProfile
