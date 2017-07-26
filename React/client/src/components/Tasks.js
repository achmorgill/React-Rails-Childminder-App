import React from 'react'
import ChildWrapper from './ChildWrapper'
// var request = require('request')

class Tasks extends React.Component {

  constructor() {
    super();
        this.state = {
          profiles: {},
          tasks: [],
          children: [],
          option_selected: null
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
    var request2 = new XMLHttpRequest();
    request2.open('GET', url2);

    request2.onload = () => {
      if (request.status === 200) {
        var profiles = JSON.parse(request2.responseText);
        this.setState({children: profiles})
        console.log("children", this.state.children)

      }else{
        console.log("oh no its not logged in")
        this.props.history.goBack();
      }
    }
    request2.send(null);


  }

  render() {
    return(
      <div>
        <ChildWrapper children={this.state.children} handleOnClick={this.handleOnClick}
        />
      </div>
      )

  }
}
export default Tasks
