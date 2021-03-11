import React from "react";
import "./textinput.css"


class textInput extends React.Component {
 render() {
  return (
  <header class="header">
    <button class="login-btn">
     <img class="steam-login-img" src={Steam} alt="Steam"></img>
     <label class="steam-login-text">ZALOGUJ</label>
    </button>
    <Link to={"/shop"}><img class="rgngs-logo" src={Logo} alt="Logo" ></img></Link>
    

  </header>
  )
 }
}

export default textInput;