import React from "react";
import Product from "./product";
import Loder from "./loder";
const product = ({data , loding}) => {
  return (
    <>
      {loding ? (
        <Loder />
      ) : (
        <div className="productList">
          {data.map((item) => (
            <Product items={item}/>
          ))}
        </div>
      )}
    </>
  );
};

export default product;
