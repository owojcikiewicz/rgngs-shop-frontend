import React from "react";
import Item from "../../components/item/item";
import itemsData from "../../components/item/itemsData";
import "./shop.css";

class Shop extends React.Component {
  render() {
    return (
      <div class="shop-container">
        <div class="shop-text-container">
          <h2>NASZA OFERTA</h2>
          <div class="shop-desccription">U nas zakupisz se cos tam scos tam i wgl jakis </div>
        </div>
        <div class="items-container">
          {itemsData.map((val, key) => {
            return <Item title={val.title} gradient={val.gradient} />;
          })}
        </div>
      </div>
    );
  }
}

export default Shop;
