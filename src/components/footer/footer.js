import React from "react";
import "./footer.css"
import Logo2 from "../../assets/logo2.png";
import Logo from "../../assets/logo.png";
import footerRoutes from "./footerData"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
          <div class="footer-logo-container"><img class="footer-logo" src={Logo2}></img></div>
          <div class="footer-info-container">Thriving Ventures AB trading as Monolith Servers is registered in Stockholm, Sweden (559122-7755). Copyright 2020 All rights reserved. All trademarks and registered trademarks are the property of their respective owners.</div>
          <div class="footer-links-container">
          <a href="https://discord.gg/QHDg97vZ" target="_blank">DISCORD</a>
          {footerRoutes.map((val, key) =>{
              return (
                <li key={key} >
                      <Link to={val.link}> {val.title} </Link>
                </li>
                );
          })}
          </div>
      </footer>
    )
 }
}

export default Footer;
