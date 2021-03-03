import React from "react";
import "./header.css"
import Steam from "../../assets/steam.png";
import Logo from "../../assets/logo.png";

class Header extends React.Component {
 render() {
  return (
  <header class="header">
    <button class="login-btn">
     <img class="steam-login-img" src={Steam} alt="Steam"></img>
     <label class="steam-login-text">ZALOGUJ</label>
    </button>
    <img class="rgngs-logo" src={Logo} alt="Logo"></img>
  </header>
  )
 }
}

export default Header;