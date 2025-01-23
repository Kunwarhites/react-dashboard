import React from "react";
import "../Components/MainContainer.css";

import Banner from "../Asset/Banner/banner.jpg";
import Card1 from "../Asset/Cards/card1.jpeg";

import CardMain from "./CardMain";


function MainContainer() {
  return (
    <div className="mainContainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner}) no-repeat center center/cover`,
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
              <p>
                Ending In <span>2d:15h:20m</span>
              </p>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="button2">
                Popular
              </a>
            </div>
            <div className="filter_buttons">
              <a href="#" className="button1">All</a>
              <a href="#" className="button2">Illustration</a>
              <a href="#" className="button2">Art</a>
              <a href="#" className="button2">Games</a>
            </div>
          </div>
        </div>

        <main>
          <CardMain  imgSrc={Card1} title={"Demo Images"} hearts={"65"}/>
        </main>
      </div>

      <div className="right"> </div>
    </div>
  );
}

export default MainContainer;
