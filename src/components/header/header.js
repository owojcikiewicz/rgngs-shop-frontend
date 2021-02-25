import React from "react";
import "./header.css"
import Menu from "./assets/menu.png";
import Steam from "./assets/steam.png";
import Logo from "./assets/logo.png";

class Header extends React.Component {

    showMenu() {   
        
    };

    render() {  
        return (
         <div class="header">
             <button class="hamburger-menu" onClick={this.showMenu}>
                <img class="hamburger-menu-img" src={Menu} alt="Menu"></img>
             </button>

             <button class="login-btn">
                <img class="steam-login-img" src={Steam} alt="Steam"></img>
                <label class="steam-login-text">ZALOGUJ</label>
             </button>
             <img class="rgngs-logo" src={Logo} alt="Logo"></img>
             
            
         </div>
        )
    }
}

export default Header;