import React from "react";
import {Redirect} from "react-router-dom";

class Help extends React.Component {
    constructor(props) {
        super(props);
    };

    // @TODO: Post to API. 
    handleSubmit() {

    };

    // @TODO: Render help form. 
    // this.props.orders.
    render() {
        if (!this.props.login || this.props.login.loggedin !== true || !this.props.login.user) {
            return <Redirect to="/"/>
        };

        return (
           <label>hi</label> 
        );
    };
};

export default Help;