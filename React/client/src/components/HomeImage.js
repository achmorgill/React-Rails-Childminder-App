import React from 'react';

const HomeImage = (props) => {
  return(
      <div id="home-div">
        <img className="home-image1" src={props.homePhoto1} />
        <img className="home-image2" src={props.homePhoto2} />
        <img className="home-image3" src={props.homePhoto3} />
      </div>
    )

}
export default HomeImage;