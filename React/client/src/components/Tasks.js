import React from 'react'
import ChildWrapper from './ChildWrapper'
// var request = require('request')

class Tasks extends React.Component {

  constructor() {
    super();
        this.state = {
          homePhoto: "/public/images/Nursery-schools2.jpg",
          profiles: {},
          tasks: [
            {name: "Tony Miller", image: "/public/image/tony.jpeg", desc: "There will be a description here"},
            {name: "Bethany Miller", image: "/public/image/bethany.jpeg", desc: "There will be a description here"},
            {name: "Jenny Smith", image: "/public/image/jenny.jpeg", desc: "There will be a description here"}
           ]
        }
      }

  // componentDidMount() {

  //   request ('http://localhost:3000/api/tasks', function(error, response, body){
  //     if (response.statusCode !== 200) return;

  //     var tasks = JSON.parse(body);

  //     if (tasks.result[0] !== undefined) {
  //       console.log("data", data)
  //     }
  //   })
  // }
  //   var url = 'http://localhost:3000/api/tasks';
  //   var request = new XMLHttpRequest();
  //   request.open('GET', url);

  //   request.onload = () => {
  //     if (request.status === 200) {
  //       console.log("request", request.responseText);
  //       var data = JSON.parse(request.responseText);
  //     }else{
  //       console.log("oh no its not logged in")
  //       this.props.history.goBack();
  //     }
  //   }
  //   request.send(null);
  // }

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
