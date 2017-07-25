import React from 'react';
import NavComponent from '../components/NavComponent';
import HomeImage from '../components/HomeImage';

class MainPageContainer extends React.Component {

  constructor() {

    super();
    this.state = {
      homePhoto1: "/public/images/Haddo.jpg",
      homePhoto2: "/public/images/bucket-spade-beach.jpg"      // homePhoto3: "/public/images/Haddo.jpg"

    }
  }

  render() {
    return(
      <div className="main-page">
        <HomeImage homePhoto1={this.state.homePhoto1}/>
        <HomeImage homePhoto2={this.state.homePhoto2}/>
      </div>
      )
  }
}
export default MainPageContainer