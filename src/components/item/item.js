import React from "react";
import "./item.css"

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.title = props.title;
        this.gradient = props.gradient;
    }
    render() {  
        return (
            <div  class="item-layout">
                <div class="item-main">
                    <div class="item-header" style={{background:this.gradient}}><label class="item-title">{this.title}</label></div>
                    <button class="item-button" style={{background:this.gradient}}>KUP</button>
                    <div class="item-price-div"><label class="item-price">200 PLN</label></div>
                    <div class="item-content">Ten pakiet zawiera cos tam wypisz se itemy ogoglnie to sie fomratuje w htmlu i wgl wiec dam lorem ipsunm Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem lorem ipsunm Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
                </div>
            </div>
        )
    }
    
}

export default Item;

Item.defaultProps = {
    title: "item name",
    gradient: "linear-gradient(to right, rgb(195, 55, 100), rgb(29, 38, 113))",
  };