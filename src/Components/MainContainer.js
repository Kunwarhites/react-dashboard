import React from 'react'
import "../Components/MainContainer.css";

import Banner from "../Asset/Banner/banner.jpg"

function MainContainer() {
    return (
      <div className="mainContainer">
        <div className="left"> 
          <div 
            className="banner" 
            style={{
              background: `url(${Banner}) no-repeat center center/cover`
            }}
          >
            <div className="textContainer">
                <h1>Round Hall</h1>
                <h2>1.5 ETH</h2>
                <p>Upload by Kunwar Hitesh Singh</p>
                <div className="bid">
                    <a href="#" className="button1">
                        Bid Now
                    </a>
                    <p>Ending In <span>2d:15h:20m</span></p>
                </div>
            </div>
          </div>    
        </div>
        <div className="right">  </div>
      </div>
    );
  }
  
  export default MainContainer;
  