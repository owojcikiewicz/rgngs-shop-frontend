import React from "react";
import "./page404.css"

class Page404 extends React.Component {
  render() {
    return (
      <div class="page404-main">
        <label class="page404-main-text">404</label>
        <label class="page404-second-text">Strona o podanym adresie nie istnieje.</label>
      </div>
    );
  }
}

export default Page404;