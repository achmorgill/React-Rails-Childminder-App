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
       <form ref={(input)} => this.email = input} className="email-edit" onSubmit={this.saveEmail.bind(this)} />
          <input ref={(input)} => this.name = input} type="text" placeholder="Email Name" />
          <button type="submit">Submit</button>
       </form>
      </div>
      )

  }
}
export default Content

