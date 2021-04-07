import React from "react";
import Form from "../../components/forms/forms";
import {Redirect} from "react-router-dom";

class Order extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        if (this.props.location && this.props.location.state && this.props.location.state.id && this.props.location.state.user) {
            return (
                <Form id={this.props.location.state.id} user={this.props.location.state.user}/>
            );
        };

        return (
            <Redirect to="/"/>
        );
    };
};

export default Order;