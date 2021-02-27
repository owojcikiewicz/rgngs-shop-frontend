import React from "react";
import "./header.css"
import Menu from "./assets/menu.png";
import Steam from "./assets/steam.png";
import Logo from "./assets/logo.png";

class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {clicked: false};
        this.sidebarMenu = React.createRef();
        this.showSidebarMenu = this.showSidebarMenu.bind(this);
    };
    
    showSidebarMenu() {
        this.setState(state => {
            return {clicked: !state.clicked};
        });

        console.log(this.state.clicked);
    };

    render() {  
        return (
         <div class="header">
             <button class="hamburger-menu" onClick={this.showSidebarMenu}>
                <img class="hamburger-menu-img" src={Menu} alt="Menu"></img>
             </button>

             <button class="login-btn">
                <img class="steam-login-img" src={Steam} alt="Steam"></img>
                <label class="steam-login-text">ZALOGUJ</label>
             </button>
             <img class="rgngs-logo" src={Logo} alt="Logo"></img>
             <div class="header-menu" ref={this.sidebarMenu}>
                 <ul>
                    <li><a href="#">SKLEP</a></li>
                    <li><a href="#">REGULAMIN</a></li>
                    <li><a href="#">INFORMACJE</a></li>
                 </ul>
             </div>
            
         </div>
        )
    }
}

export default Header;