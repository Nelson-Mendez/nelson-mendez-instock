import React from "react";
import kebab from "../../assets/Icons/SVG/Icon-kebab-default.svg";
import axios from "axios";
import "./removeitem.scss";

const RemoveItem = props => {
  const removeItem = () => {
    axios
      .delete(`http://localhost:8080/inventory/${props.itemId}`)
      .then(response => {
        props.transferUpdatedInventory(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <button
        onClick={props.handleShowMenu}
        {...props}
        type="button"
        className="button"
      >
        <img src={kebab} alt="kebab" className="kebab" />
      </button>
      {props.showMenu && (
        <div className="dropdown" onClick={removeItem}>
          <button className="dropdown__text">Remove</button>
        </div>
      )}
    </div>
  );
};

export default RemoveItem;
