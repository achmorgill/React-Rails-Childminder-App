import React from 'react';

const HomeImage = (props) => {
  return(
      <div id="home-div">
        <img className="home-image" src={props.homePhoto} />
      </div>
    )

}
export default HomeImage;