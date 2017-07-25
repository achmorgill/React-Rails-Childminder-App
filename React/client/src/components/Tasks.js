import React from 'react'
import ChildWrapper from './ChildWrapper'
// var request = require('request')

class Tasks extends React.Component {

  constructor() {
    super();
        this.state = {
          profiles: {},
          tasks: [
            {name: "Tony Miller", image: "/public/images/tony.jpeg", desc: "There will be a description here"},
            {name: "Bethany Miller", image: "/public/images/bethany.jpeg", desc: "There will be a description here"},
            {name: "Jenny Smith", image: "/public/images/jenny.jpeg", desc: "There will be a description here"}
           ]
        }
      }

  componentDidMount() {

    var url = 'http://localhost:3000/api/tasks';
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = () => {
      if (request.status === 200) {
        console.log("request", request.responseText);
        var data = JSON.parse(request.responseText);
      }else{
        console.log("oh no its not logged in")
        this.props.history.goBack();
      }
    }
    request.send(null);
  }

  handleOnClick(index) {
    console.log("handlOnclick")
  }

  render() {
    return(
      <div>
        <h1>Select Child To See their Profile</h1>
        <ChildWrapper tasks={this.state.tasks}/>
      </div>
      )

  }
}
export default Tasks
