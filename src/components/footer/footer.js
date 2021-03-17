import React from "react";
import "./footer.css"
import Logo2 from "../../assets/logo2.png";
import footerRoutes from "./footerData"
import {Link} from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
          <div class="footer-logo-container"><img class="footer-logo" src={Logo2} alt={"RageGANGS"}></img></div>
          <div class="footer-info-container">Rage Gangs.pl - Sklep prowadzony jest przez: FUNDACJĘ ROZWOJU PRZEDSIĘBIORCZOŚCI „TWÓJ STARTUP”, KRS: 0000442857; NIP: 5213641211; REGON: 146433467, BDO: 000460502</div>
          <div class="footer-links-container">
            <a href="https://www.youtube.com" rel="noreferrer" target="_blank">Discord</a>
          {footerRoutes.map((val, key) =>{
              return (
                <li key={key} >
                      <Link to={val.link}> {val.title}</Link>
                </li>
                );
          })}
          </div>
      </footer>
    )
 }
}

export default Footer;
