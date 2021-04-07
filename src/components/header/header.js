import React from "react";
import axios from "axios";
import "./header.css"
import Steam from "../../assets/steam.png";
import Help from "../../assets/lifebuoy.png";
import Logout from "../../assets/logout.png";
import History from "../../assets/list.png";
import Logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import Avatar from "react-avatar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilemenu: false
    };

    this.showProfile = () => {
      this.setState(state => ({
        profilemenu: !state.profilemenu
      }));
    };
  };

 render() {
  if (this.props.loggedin === true) {
    return (
      <header class="header">
        <button class="profile-btn" onClick={this.showProfile}>
         <Avatar size="40" src={this.props.info.avatar.medium} round={true} alt={"https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/"} />
        </button>
        <div className={this.state.profilemenu ? "profile-menu active" : "profile-menu"}>
          
          <div class="profile-info">
            <Avatar className="profile-avatar" size="40" src={this.props.info.avatar.medium} round={true} alt={"https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/"} />
            <label class="profile-name">{this.props.info.name}</label>
            <label class="profile-rcoins">rCoins: {this.props.user.rcoins}</label>
          </div>
          
          <div class="button-container">
            <a class="history-btn" href="#" rel="noreferrer" >
              <img class="history-img" src={History} alt="Steam"></img>
              <label class="history-text">HISTORIA ZAMÓWIEŃ</label>
            </a>
            
            <a class="help-btn" href="#" rel="noreferrer" >
              <img class="help-img" src={Help} alt="Steam"></img>
              <label class="help-text">CENTRUM POMOCY</label>
            </a>
            
            <a class="logout-btn" href="#" rel="noreferrer" >
              <img class="logout-img" src={Logout} alt="Steam"></img>
              <label class="logout-text">WYLOGUJ SIĘ</label>
            </a>
         
          </div>
        </div>
        <Link to={"/"}><img class="rgngs-logo" src={Logo} alt="Logo" ></img></Link>
      </header>
      )
  } else {
    return (
      <header class="header">
        <a class="login-btn" href="/login" rel="noreferrer" >
          <label class="steam-login-text">ZALOGUJ</label>
         <img class="steam-login-img" src={Steam} alt="Steam"></img>
        </a>
        <Link to={"/"}><img class="rgngs-logo" src={Logo} alt="Logo" ></img></Link>
      </header>
      )
  };
 };
}

export default Header;