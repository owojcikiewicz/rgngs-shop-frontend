import React from "react";
import "./header.css"
import Steam from "../../assets/steam.png";
import Logo from "../../assets/logo.png";
import {Link} from "react-router-dom";

class Header extends React.Component {
 render() {
  return (
  <header class="header">
    <a class="login-btn" href="https://www.youtube.com">
      <label class="steam-login-text">ZALOGUJ</label>
     <img class="steam-login-img" src={Steam} alt="Steam"></img>
    </a>
    <Link to={"/"}><img class="rgngs-logo" src={Logo} alt="Logo" ></img></Link>
    

  </header>
  )
 }
}

export default Header;