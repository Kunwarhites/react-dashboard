import React from 'react'
import { BsHeartFill } from "react-icons/bs";

function CardMain(imgSrc, title, hearts) {
  return (
    <div className="card_main">
        <img src="" alt="" />
         
        <div className="card_main_name">
            <h2>{title}</h2>

            <div className="card_icon">
                <i>
                  {" "} 
                  <BsHeartFill /> <span>{hearts}</span>{" "}
                </i>
            </div>
        </div>
    </div>
  )
}

export default CardMain