import React from "react";
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
            key={item.id}
            content={item}
            transferUpdatedInventory={transferUpdatedInventory}
          />
        );
      })}
    </>
  );
}
