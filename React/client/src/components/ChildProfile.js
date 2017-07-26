import React from 'react'
import ChildWrapper from './ChildWrapper'
// var request = require('request')

class ChildProfile extends React.Component {

  constructor() {
    super();
    this.state = {
      profiles: {},
      tasks: [],
      children: [],
      profileForm: false
    }
  }

  handleOnClick() {
    console.log("onclick")
    this.setState({profileForm: true})
  }

  componentDidMount() {

    var url = 'http://localhost:3000/api/children';
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        this.setState({children: data})
        console.log("children", this.state.children)

      }else{
        console.log("oh no its not logged in")
        this.props.history.goBack();
      }
    }
    request.send(null);

    // var url2 = 'http://localhost:3000/api/children';
    // var request2 = new XMLHttpRequest();
    // request2.open('GET', url2);

    // request2.onload = () => {
    //   if (request.status === 200) {
    //     var profiles = JSON.parse(request2.responseText);
    //     this.setState({children: profiles})
    //     console.log("children", this.state.children)

    //   }else{
    //     console.log("oh no its not logged in")
    //     this.props.history.goBack();
    //   }
    // }
    // request2.send(null);
  }

  render() {
    if (!this.state.profileForm) {
      return(
       <div>
          <ChildWrapper children={this.state.children} handleOnClick={this.handleOnClick.bind(this)} />
        </div>
        )
    }else {
      return(
        <div>
          <form >
            Full Name:<br/>
            <input type="text" name="name"  /><br/>
            <br/>
            Address:<br/>
            <input type="text" address="address" /><br/>
           <br/><br/>
            <input type="submit" value="Save" />
          </form>
        </div>

        )
      }
  }
}
export default ChildProfile

