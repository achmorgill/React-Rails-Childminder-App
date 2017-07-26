import React from 'react'

class Profiles extends React.Component {

 constructor() {
   super();
   this.state = {
     profiles: {},
     tasks: [],
     children: [],
   }
 }

 componentDidMount(child_id) {

   var url = 'http://localhost:3000/api/tasks' + child_id;
   var request = new XMLHttpRequest();
   request.open('GET', url);

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
 }

  render() {

    return(
      <div>
        <h1>Task page</h1>
      </div>
      )
  }
}
export default Profiles