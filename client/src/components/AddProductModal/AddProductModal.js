import React from 'react';
import ReactDOM from 'react-dom';
import Switch from 'react-switch';
import axios from "axios";
import Modal from 'react-modal';
import {v4 as uuidv4} from 'uuid';
// import "../../PartialStyles/fonts";
// import "../../PartialStyles/variables";
// import "../../PartialStyles/mixins";


import "./addproductmodal.scss";

Modal.setAppElement('#root');

const URL = "http://localhost:8080/"

const modalStyles = {
  content: {
    position: 'absolute',
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }

}

const AddProductModal = ({ isOpen, closeModal, getInventoryList }) => {

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .post(`${URL}inventory/add`, {
        id: uuidv4(),
        name: event.target.productname.value,
        description: event.target.description.value,
        quantity: event.target.quantity.value,
        lastOrdered: event.target.lastordered.value,
        city: event.target.city.value,
        country: event.target.country.value,
        isInstock: event.target.status.value,
      })
      .then(res => {
        getInventoryList();
      })
      .catch(err => {
        console.log(err);
      });
    event.target.reset()
    closeModal()
  }


  return (
    <>
      {isOpen &&
        <Modal isOpen={isOpen} style={modalStyles}>

          <form onSubmit={handleSubmit} className="product-modal-form">

            <h2 className="product-modal-form__heading">Create New</h2>

            <div className="product-modal-form__row">
              <div className="product-modal-form__field">
                <label className="product-modal-form__label">PRODUCT</label>
                <input className="product-modal-form__name" name="productname" placeholder="Item Name" required />
              </div>

              <div className="product-modal-form__field">
                <label className="product-modal-form__label">LAST ORDERED</label>
                <input className="product-modal-form__name" name="lastordered" placeholder="yyyy-mm-dd" required />
              </div>              
            </div>

            <div className="product-modal-form__row">
              <div className="product-modal-form__field">
                <label className="product-modal-form__label">CITY</label>
                <input className="product-modal-form__name" name="city" placeholder="City" required />
              </div>

              <div className="product-modal-form__field">
                <label className="product-modal-form__label">COUNTRY</label>
                <select className="product-modal-form__name" name="country" placeholder="Country" required >
                    <option value="Canada">Canada</option>
                    <option value="United States">United States</option>
                    <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="product-modal-form__row">
              <div className="product-modal-form__field">
                <label className="product-modal-form__label">QUANTITY</label>
                <input className="product-modal-form__name" name="quantity" placeholder="Quantity" required />
              </div>

              <div className="product-modal-form__field">
                <label className="product-modal-form__label">STAUS</label>
                <div className="product-modal-form__status">
                    <h3>In Stock</h3>
                    <Switch />
                </div>
              </div>
            </div>

            <div className="product-modal-form__row">
              <div className="product-modal-form__field">
                <label className="product-modal-form__label">ITEM DESCRIPTION</label>
                <textarea className="product-modal-form__name product-modal-form__name--description" name="description" placeholder="(Optional)" />
              </div>             
            </div>

            <button className="product-modal-form__button--save" type="submit">Save</button>
          </form>
          <button className="product-modal-form__button--cancel" onClick={closeModal}>Cancel</button>
        </Modal>
      } 
    </>
  )
}

export default AddProductModal;

