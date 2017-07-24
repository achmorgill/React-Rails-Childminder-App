import React from 'react'

class Tasks extends React.Component {

  constructor(props) {
    super(props)
    this.state= {

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

  render() {
    return(
      <h1>hello Im the tasks page</h1>
      )

  }
}
export default Tasks
