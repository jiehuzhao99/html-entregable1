import React from "react";
export default class ProductsPage extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "Chachopo",
        price: 30,
      },
      {
        id: 3,
        name: "Navajas",
        price: 25,
      },
      {
        id: 2,
        name: "Chorizo a la sidra",
        price: 15,
      },
    ],
  };

  changeOrderByPrice = () => {
    //Should order all products by price in descending order
  };
  getPriceColor = (price) => {
    // price > 25 should return red
    // price > 15 and price <= 25 should return orange
    // In any other case return green
  };
  render() {
    return (
      <>
        <h1>Products</h1>
        <button onClick={this.changeOrderByPrice}>Change order</button>
        {this.state.products.map((product) => (
          <div
            key={product.id}
            style={{ color: this.getPriceColor(product.price) }}
          >
            {product.name} - {product.price}
          </div>
        ))}
      </>
    );
  }
}
