import React from "react";
import "./MainContainer.css";
import banner from "../img/banner.jpg";
import CardMain from "./CardMain";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.jpg";
import card4 from "../img/card4.png";
import card5 from "../img/card5.png";
import card6 from "../img/card6.jpg";
import MainRightTop from "./MainRightTop";
import MainRightBottom from "./MainRightBottom";
function MainContainer() {
  return (
    <div className="mainContainer">
      <div className="left">
        <div className="banner">
          style=
          {{
            background: `url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          <div className="textContainer">
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p> Uploaded by Alexander vernof</p>
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
              <a href="#" className="buttin2">
                Popular
              </a>
            </div>
            <div className="filter_buttons">
              <a href="#" className="button1">
                All
              </a>
              <a href="#" className="button2">
                Illustrate
              </a>
              <a href="#" className="button3">
                Arts
              </a>
              <a href="#" className="button4">
                Games
              </a>
            </div>
          </div>
          <main>
            <CardMain imgSrc={card1} title={"cubic Thunder"} hearts={"65"} />
            <CardMain imgSrc={card2} title={"Pokemon Ball"} hearts={"45"} />
            <CardMain imgSrc={card3} title={"Pyramid God"} hearts={"55"} />
            <CardMain imgSrc={card4} title={"Stunning Cube"} hearts={"65"} />
            <CardMain imgSrc={card5} title={"Star Crystal"} hearts={"75"} />
            <CardMain imgSrc={card6} title={"Crystal Bird"} hearts={"85"} />
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTop />
        <MainRightBottom />
      </div>
    </div>
  );
}

export default MainContainer;
