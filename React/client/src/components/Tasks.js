import React from 'react'
import ChildWrapper from './ChildWrapper'
// var request = require('request')

class Tasks extends React.Component {

  constructor() {
    super();
        this.state = {
          profiles: {},
          tasks: [],
          children: []
        }
      }

  componentDidMount() {

    var url1 = 'http://localhost:3000/api/tasks';
    var request = new XMLHttpRequest();
    request.open('GET', url1);

    request.onload = () => {
      if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        this.setState({tasks: data})
        console.log("tasks", this.state.tasks)

      }else{
        console.log("oh no its not logged in")
        this.props.history.goBack();
      }
    }
    request.send(null);

    var url2 = 'http://localhost:3000/api/children';
    var request = new XMLHttpRequest();
    request.open('GET', url2);

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


  }

  handleOnClick(index) {
    console.log("handlOnclick")
  }

  render() {
    return(
      <div>
        <h3 id="select-child">Select Child</h3>
        <ChildWrapper tasks={this.state.tasks} handleOnClick={this.handleOnClick}
        />
      </div>
      )

  }
}
export default Tasks
