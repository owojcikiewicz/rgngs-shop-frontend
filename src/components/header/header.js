import React from "react";
import axios from "axios";
import "./header.css"
import Steam from "../../assets/steam.png";
import Logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import Avatar from 'react-avatar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: {}, info: {}, loggedin: false};
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
            this.setState({user: {id: res.data.id, rcoins: res.data.rcoins}, info: info, loggedin: true})
          })
          .catch(err => {
            this.setState({user: {id: res.data.id, rcoins: res.data.rcoins}, info: {}, loggedin: true})
          }); 
      })
      .catch(err => {
        if (err.code == 401) {
          this.setState({user: {}, info: {}, loggedin: false});
        };
      });
  };

 render() {
  if (this.state.loggedin === true) {
    console.log(this.state);

    return (
      <header class="header">
        <button class="profile-btn">
         <Avatar size="40" src={this.state.info.avatar.medium} round={true} alt={"https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/"} />
        </button>
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