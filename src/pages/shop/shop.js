import React from "react";
import Item from "../../components/item/item";
import axios from "axios";
import "./shop.css";

class Shop extends React.Component {
  constructor(props) {
    super();
    this.state = {packages: []};
  };

  async componentDidMount() {
    let packages = [];
    await axios.get("http://localhost:1000/packages")
      .then(res => {
        console.log(res.data);
        for (let i of res.data) {
          packages[i.id] = {
            name: i.name, 
            description: i.description, 
            price: i.price, 
            gradient: i.gradient
          };
        };
        
        this.setState({packages: packages});
    });
  };

  render() {
    return (
      <div class="shop-container">
        <div class="shop-text-container">
          <h2>NASZA OFERTA</h2>
          <div class="shop-desccription">Poniżej znajduje się lista dostępnych do kupienia pakietów.</div>
        </div>
        <div class="items-container">
          {this.state.packages.map((val, key) => {
            return <Item id={val.id} title={val.name} gradient={val.gradient} description={val.description} price={val.price + " PLN"}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Shop;
