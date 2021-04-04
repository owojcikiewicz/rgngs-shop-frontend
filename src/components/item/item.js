import React from "react";
import "./item.css"

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.title = props.title;
        this.description = props.description;
        this.price = props.price;
        this.gradient = props.gradient;
    }; 

    buy() {

    };

    render() {  
        return (
            <div class="item-layout">
                <div class="item-main">
                    <div class="item-header" style={{backgroundImage:this.gradient}}><label class="item-title">{this.title}</label></div>
                    <button class="item-button" style={{backgroundImage:this.gradient}} onClick={this.buy}>KUP</button>
                    <div class="item-price-div"><label class="item-price">{this.price}</label></div>
                    <div class="item-content">{this.description}</div>
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