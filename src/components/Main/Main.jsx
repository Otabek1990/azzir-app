import React from "react";
import "./Main.css";
import { products } from "../../datas/products";
import Product from "../Product/Product";

function Main(props) {
  const categories = ["all", ...new Set(products.map((item) => item.category))];
  console.log(categories);
  return (
    <main>
      <h1>Mahsulotlar ruyhati</h1>
      <div className="categories">
        {categories.map((category, index) => (
          <h2 key={index}>{category}</h2>
        ))}
      </div>

      <div className="products_list">
        {products.map((item) => (
          <Product
            image={item.image}
            category={item.category}
            title={item.title}
          />
        ))}
      </div>
    </main>
  );
}
export default Main;
