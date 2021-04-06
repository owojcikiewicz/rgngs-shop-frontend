import React from "react";
import axios from "axios";
import "./header.css"
import Steam from "../../assets/steam.png";
import Logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import Avatar from "react-avatar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}, 
      info: {}, 
      loggedin: false, 
      profilemenu: false
    };

    this.showProfile = () => {
      this.setState(state => ({
        profilemenu: !state.profilemenu
      }));
    };
  };

  async getInfo(id) {
    return new Promise(async (resolve, reject) => {
      await axios.get("/info?id=" + id)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  async componentDidMount() {
    await axios.get("/login/user", {withCredentials: true}) 
      .then(async res => { 
        await this.getInfo(res.data.id)
          .then(info => {
            this.setState(state => ({
              user: {id: res.data.id, rcoins: res.data.rcoins},
              info: info,
              loggedin: true,
              profilemenu: state.profilemenu
            }));
          })
          .catch(err => {
            this.setState(state => ({
              user: {id: res.data.id, rcoins: res.data.rcoins},
              info: state.info,
              loggedin: true,
              profilemenu: state.profilemenu
            }));
          }); 
      })
      .catch(err => {
        if (err.code == 401) {
          this.setState(state => ({
            user: state.user,
            info: state.info,
            loggedin: false,
            profilemenu: state.profilemenu
          }));
        };
      });
  };

 render() {
  if (this.state.loggedin === true) {
    console.log(this.state);

    return (
      <header class="header">
        <button class="profile-btn" onClick={this.showProfile}>
         <Avatar size="40" src={this.state.info.avatar.medium} round={true} alt={"https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/"} />
        </button>
        <div className={this.state.profilemenu ? "profile-menu active" : "profile-menu"}>
          
          <div class="profile-info">
            <Avatar className="profile-avatar" size="40" src={this.state.info.avatar.medium} round={true} alt={"https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/"} />
            <label class="profile-name">{this.state.info.name}</label>
            <label class="profile-rcoins">rCoins:{this.state.user.rcoins}</label>
          </div>
          
          <div class="button-container">
            <button class="history-btn">
              <img class="history-img" src={Steam} alt="Steam"></img>
              <label class="history-text">HISTORIA ZAMÓWIEŃ</label>
            </button>
            
            <button class="help-btn">
              <img class="help-img" src={Steam} alt="Steam"></img>
              <label class="help-text">CENTRUM POMOCY</label>
            </button>
            
            <button class="logout-btn">
              <img class="logout-img" src={Steam} alt="Steam"></img>
              <label class="logout-text">WYLOGUJ SIĘ</label>
            </button>
         
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