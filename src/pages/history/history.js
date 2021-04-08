import React from "react";
import {Redirect} from "react-router-dom";

class History extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        if (!this.props.login || this.props.login.loggedin !== true || !this.props.login.user) {
            return <Redirect to="/"/>
        };

        // @TODO: Render history.
        // this.props.orders
        return (
            <div class="privacy-main">
              <h1 class="privacy-main-text">POLITYKA PRYWATNOŚCI</h1>
                <h2>I. MOJA PRYWATNOSC</h2>
                <ul>
                  <li>um is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets c</li>
                  <li>Jakis punkt</li>
                  <li>Jakis punkt</li>
                  <li>Jakis punkt</li>
                </ul>
            </div>
        )
    };
};

export default History;