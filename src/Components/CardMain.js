import React from "react";
import { BsHeartFill } from "react-icons/bs";
function CardMain({ imgSrc, title, hearts }) {
  return (
    <div className="card_main">
      <img src={imgSrc} alt="" />
      <div className="card_main_name">
        <h2>{title}</h2>
        <div className="card-icon">
          <i>
            <BsHeartFill />
            <span>{hearts}</span>
          </i>
        </div>
      </div>
      <div className="stats">
        <p>
          Current Bid <span>1.2ETH</span>
        </p>
        <p>
          Ending In <span>1.2 ETH</span>
        </p>
      </div>
      <div className="card_button">
        <a href="" className="button1 btn">
          Place a bid
        </a>
        <a href="" className="button2 btn">
          History
        </a>
      </div>
    </div>
  );
}

export default CardMain;
