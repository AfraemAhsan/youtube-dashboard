import React, { useEffect } from "react";
import ARN from "../img/ARN.png";
import "./Menu.css";
import {
  FaDelicious,
  FaShoppingCart,
  FaGoogleWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
function Menu() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");
    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
    console.log(mainMenuLi);
  }, []);
  return (
    <menu>
      <img src={ARN} alt="" />
      <ul id="mainMenu">
        <Icon icon={<FaDelicious />} />
        <Icon icon={<FaShoppingCart />} />
        <Icon icon={<FaGoogleWallet />} />
        <Icon icon={<FaChartLine />} />
        <Icon icon={<FaRegClock />} />
        <Icon icon={<FaDelicious />} />
      </ul>
      <ul className="lastMenu">
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
      </ul>
    </menu>
  );
}
const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);
export default Menu;
