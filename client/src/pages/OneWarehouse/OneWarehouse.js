import React from "react";

import "./onewarehouse.scss";
import arrowright from "../../assets/Icons/SVG/Icon-arrow-right.svg";

const OneWarehouse = ({ id, name, address, contact, categories }) => {
  return (
    <>
      <div className="warehouseItem__block warehouseItem__block--first">
        <h2 className="warehouseItem__heading">{name}</h2>
        <p className="warehouseItem__info">{address.street}, {address.location}</p>
        <img className="warehouseItem__image" src={arrowright} />
      </div>
      <div className="warehouseItem__block">
        <p className="warehouseItem__info">{contact.name}</p>
        <p className="warehouseItem__info warehouseItem__info--italic">{contact.position}</p>
      </div>
      <div className="warehouseItem__block">
        <p className="warehouseItem__info">{contact.phone}</p>
        <p className="warehouseItem__info">{contact.email}</p>
      </div>
      <div className="warehouseItem__block">
        <p className="warehouseItem__info">{categories}</p>
      </div>
    </>
  )
}

export default OneWarehouse;