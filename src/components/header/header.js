import React from "react";
import "./header.css"
import Menu from "./assets/menu.png";
import Steam from "./assets/steam.png";
import Logo from "./assets/logo.png";
import routes from "./headerData"
import Close from "./assets/close.png"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Header extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   clicked: false
  };
  this.sidebarMenu = React.createRef();
  this.showSidebarMenu = this.showSidebarMenu.bind(this);
 };

 showSidebarMenu() {
  this.setState(state => {
   return {
    clicked: !state.clicked
   };
  });

  console.log(this.state.clicked);
 };

 render() {
  return (
  <div class="header">
    <button class="hamburger-menu" onClick={this.showSidebarMenu}>
     <img class="hamburger-menu-img" src={this.state.clicked ? Close : Menu } alt="Menu"></img>
    </button>
    <button class="login-btn">
     <img class="steam-login-img" src={Steam} alt="Steam"></img>
     <label class="steam-login-text">ZALOGUJ</label>
    </button>
    <img class="rgngs-logo" src={Logo} alt="Logo"></img>
    <div className={this.state.clicked ? 'header-menu active' : 'header-menu'}ref={this.sidebarMenu}>
      <ul className="headerMenuList">
        {routes.map((val, key) =>{
          return (
            <li
              key={key}
              className="row"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div>{val.titel}</div>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
  )
 }
}

export default Header;
