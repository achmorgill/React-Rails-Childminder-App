import React from 'react';
import NavComponent from '../components/NavComponent';
import HomeImage from '../components/HomeImage';

class MainPageContainer extends React.Component {

  constructor() {

    super();
    this.state = {
      homePhoto: "/public/images/Nursery-schools2.jpg",
    }
  }

  render() {
    return(
      <div className="main-page">
        <HomeImage homePhoto={this.state.homePhoto}/>
      </div>
      )
  }
}
export default MainPageContainer