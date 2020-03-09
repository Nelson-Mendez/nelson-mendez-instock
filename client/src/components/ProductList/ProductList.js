import React from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

export default function ProductList(props) {
  const { content } = props;

  const transferUpdatedInventory = itemId => {
    props.updateInventory(itemId);
  };

  return (
    <>
      {content.map(item => {
        return (
          <SingleProduct
            content={item}
            transferUpdatedInventory={transferUpdatedInventory}
          />
        );
      })}
    </>
  );
}
