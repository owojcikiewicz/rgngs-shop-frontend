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
        if (this.title === "VIP") {
            let str = "Wyróźnij się z tłumu i zyskaj eksluzywne benefity!\n\n- Możliwość stworzenia dwóch postaci\n- Ekskluzywne pojazdy VIP\n- Własne tablice rejestracyjne\n- Pełna oferta Paralake Customs\n- 50+ miejsca w banku\n- 50+ miejsca w sejfach\n- Boost do regeneracji kondycji\n- 2 dodatkowe doniczki\n- 2 dodatkowe lampy\n- 2 dodatkowe wentylatory\n\nI wiele, wiele więcej!";
            return (
                <div class="item-layout">
                    <div class="item-main">
                        <div class="item-header" style={{backgroundImage:this.gradient}}><label class="item-title">{this.title}</label></div>
                        <button class="item-button" style={{backgroundImage:this.gradient}} onClick={this.buy}>KUP</button>
                        <div class="item-price-div"><label class="item-price">{this.price}</label></div>
                        <div class="item-content">{<p>{str}</p>}</div>
                    </div>
                </div>
            )
        } else {
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
    };
}

export default Item;

Item.defaultProps = {
    title: "item name",
    gradient: "linear-gradient(to right, rgb(195, 55, 100), rgb(29, 38, 113))",
};