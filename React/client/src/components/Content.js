import React from 'react'

class Content extends React.Component {

  saveEmail(event) {

    event.preventDefault()
    console.log("gonna save email address");
    var emailAddress = {
      email: this.emailAddress.value,
      name: this.name.value
    }
    this.emailAddress.reset()
  }


  render() {
    return(
      <div className="content">
        <form>
          <input type="text" name="fullname" />   
          <input type="text" email="lastname" />
        </form>
      </div>
      )

  }
}
export default Content

