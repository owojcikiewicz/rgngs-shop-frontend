import React from "react";
import Item from "../../components/item/item";
import "./shop.css";

class Shop extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div class="shop-container">
        <div class="shop-text-container">
          <h2>NASZA OFERTA</h2>
          <div class="shop-desccription">Poniżej znajduje się lista dostępnych do kupienia pakietów.</div>
        </div>
        <div class="items-container">
          {this.props.packages.map((val, key) => {
            return <Item id={val.id} title={val.name} gradient={val.gradient} description={val.description} price={val.price + " PLN"} login={this.props.login}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Shop;
