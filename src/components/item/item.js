import React from "react";
import {Redirect} from "react-router-dom";
import "./item.css";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
        };
        this.handleBuy = this.handleBuy.bind(this);
    }; 

    handleBuy() {
        if (this.props.login.loggedin !== true) {
            window.location.assign("/login");
            return;
        };

        this.setState(state => ({
            showForm: true,
        }));
    };

    render() {  
        if (this.state.showForm === true) {
            return (
                <Redirect
                    to={{
                        pathname: "/zamowienie",
                        state: {id: this.props.id, name: this.props.title, user: this.props.login.user}
                    }}
                />
            )
        };

        return (
            <div class="item-layout">
                <div class="item-main">
                    <div class="item-header" style={{backgroundImage:this.props.gradient}}><label class="item-title">{this.props.title}</label></div>
                    <button class="item-button" style={{backgroundImage:this.props.gradient}} onClick={this.handleBuy}>KUP</button>
                    <div class="item-price-div"><label class="item-price">{this.props.price}</label></div>
                    <div class="item-content">{<p>{this.props.description}</p>}</div>
                </div>
            </div>
        )
    };
}

export default Item;

Item.defaultProps = {
    title: "item name",
    gradient: "linear-gradient(to right, rgb(195, 55, 100), rgb(29, 38, 113))",
};