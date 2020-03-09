import React from "react";
import Switch from "react-switch";
import Modal from "react-modal";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import "./addproductmodal.scss";

Modal.setAppElement("#root");

const URL = "http://localhost:8080/";

const modalStyles = {
  content: {
    position: "absolute",
    padding: "0",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  }
};

export default class AddProductModal extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
    this.handleStatus = this.handleStatus.bind(this);
  }

  handleStatus(checked) {
    this.setState({ checked });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (
      event.target.productname.value &&
      event.target.description.value &&
      event.target.quantity.value &&
      event.target.lastordered.value &&
      event.target.city.value &&
      event.target.country.value
    ) {
      axios
        .post(`${URL}inventory/add`, {
          id: uuidv4(),
          name: event.target.productname.value,
          description: event.target.description.value,
          quantity: event.target.quantity.value,
          lastOrdered: event.target.lastordered.value,
          city: event.target.city.value,
          country: event.target.country.value,
          isInstock: this.state.checked
        })
        .then(res => {
          this.props.getInventoryList();
        })
        .catch(err => {
          console.log(err);
        });
      event.target.reset();
      this.props.closeModal();
    } else {
      alert("Please fill in all form fields");
    }
  };

  render() {
    return (
      <>
        {this.props.isOpen && (
          <Modal isOpen={this.props.isOpen} style={modalStyles}>
            <form onSubmit={this.handleSubmit} className="product-modal-form">
              <h2 className="product-modal-form__heading">Create New</h2>

              <div className="product-modal-form__row">
                <div className="product-modal-form__field">
                  <label className="product-modal-form__label">PRODUCT</label>
                  <input
                    className="product-modal-form__name"
                    name="productname"
                    placeholder="Item Name"
                  />
                </div>

                <div className="product-modal-form__field">
                  <label className="product-modal-form__label">
                    LAST ORDERED
                  </label>
                  <input
                    className="product-modal-form__name"
                    name="lastordered"
                    placeholder="yyyy-mm-dd"
                  />
                </div>
              </div>

              <div className="product-modal-form__row">
                <div className="product-modal-form__field">
                  <label className="product-modal-form__label">CITY</label>
                  <input
                    className="product-modal-form__name"
                    name="city"
                    placeholder="City"
                  />
                </div>

                <div className="product-modal-form__field">
                  <label className="product-modal-form__label">COUNTRY</label>
                  <select
                    className="product-modal-form__name"
                    name="country"
                    placeholder="Country"
                  >
                    <option value="Canada">Canada</option>
                    <option value="United States">United States</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="product-modal-form__row">
                <div className="product-modal-form__field">
                  <label className="product-modal-form__label">QUANTITY</label>
                  <input
                    className="product-modal-form__name"
                    name="quantity"
                    placeholder="Quantity"
                  />
                </div>

                <div className="product-modal-form__field">
                  <label className="product-modal-form__label">STATUS</label>
                  <div className="product-modal-form__status">
                    <h3>In Stock</h3>
                    <Switch
                      onChange={this.handleStatus}
                      checked={this.state.checked}
                      onColor="#67b329"
                      handleDiameter={24}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      boxShadow="0px 2px 5px rgba(0, 0, 0, 0.6)"
                      activeBoxShadow="0px 0px 2px 10px rgba(0, 0, 0, 0.2)"
                      height={24}
                      width={40}
                      className="react-switch"
                      id="material-switch"
                    />
                  </div>
                </div>
              </div>

              <div className="product-modal-form__row">
                <div className="product-modal-form__field">
                  <label className="product-modal-form__label">
                    ITEM DESCRIPTION
                  </label>
                  <textarea
                    className="product-modal-form__name product-modal-form__name--description"
                    name="description"
                    placeholder="(Optional)"
                  />
                </div>
              </div>

              <div className="buttons">
                <button className="buttons__save" type="submit">
                  SAVE
                </button>
                <button
                  className="buttons__cancel"
                  onClick={this.props.closeModal}
                >
                  CANCEL
                </button>
              </div>
            </form>
          </Modal>
        )}
      </>
    );
  }
}
