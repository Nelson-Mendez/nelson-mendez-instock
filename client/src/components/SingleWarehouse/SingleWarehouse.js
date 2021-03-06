import React from "react";

import "./singlewarehouse.scss";
import arrowright from "../../assets/Icons/SVG/Icon-arrow-right.svg";

const SingleWarehouse = ({ id, name, address, contact, categories }) => {
  return (
    <>
      <div className="warehouseItem__all-blocks">
        <div className="warehouseItem__block warehouseItem__block--first">
          <div className="warehouseItem__textBox">
            <h2 className="warehouseItem__heading">{name}</h2>
            <p className="warehouseItem__info">
              {address.street}, {address.location}
            </p>
          </div>
        </div>
        <div className="warehouseItem__bottom-blocks">
          <div className="warehouseItem__block">
            <p className="warehouseItem__info">{contact.name}</p>
            <p className="warehouseItem__info warehouseItem__info--italic">
              {contact.position}
            </p>
          </div>
          <div className="warehouseItem__block">
            <p className="warehouseItem__info">+1 {contact.phone}</p>
            <p className="warehouseItem__info">{contact.email}</p>
          </div>
          <div className="warehouseItem__block warehouseItem__block--last">
            <p className="warehouseItem__info warehouseItem__info--last">
              {categories}
            </p>
          </div>
        </div>
      </div>
      <img className="warehouseItem__icon" alt="" src={arrowright} />
    </>
  );
};

export default SingleWarehouse;
