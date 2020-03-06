import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Modal from 'react-modal';
import {v4 as uuidv4} from 'uuid';


import "./addinventorymodal.scss";

Modal.setAppElement('#root');

const URL = "http://localhost:8080/"

const modalStyles = {
  content: {
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

const AddInventoryModal = ({ isOpen, closeModal, getInventoryList }) => {

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
        // categories: event.target.categories.value
      })
      .then(res => {
        getInventoryList();
      })
      .catch(err => {
        throw err;
      });
    event.target.reset()
    closeModal()
  }


  return (
    <>
      {isOpen &&
        <Modal isOpen={isOpen} style={modalStyles}>
          <h2 className="modal-form__heading">Add New</h2>
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">PRODUCT</label>
                <input className="modal-form__name" name="productname" placeholder="Name" />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">LAST ORDERED</label>
                <input className="modal-form__name" name="lastordered" placeholder="last ordered" />
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">CITY</label>
                <input className="modal-form__name" name="city" placeholder="Address" />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">COUNTRY</label>
                <input className="modal-form__name" name="country" placeholder="Location" />
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">QUANTITY</label>
                <input className="modal-form__name" name="quantity" placeholder="Enter Name" />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">STAUS</label>
                <input className="modal-form__name" name="status" placeholder="TRUE/FALSE" />
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">ITEM DESCRIPTION</label>
                <textarea className="modal-form__name" name="description" placeholder="(000) - 000 - 0000" />
              </div>
              {/* <div className="modal-form__field">
                <label className="modal-form__label">EMAIL</label>
                <input className="modal-form__name" name="email" placeholder="email@instock.com" />
              </div> */}
            </div>
            {/* <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">CATEGORIES</label>
                <textarea
                  name="categories"
                  type="text"
                  className="form__input"
                  placeholder="Use commas to separate each category"
                  required
                />
              </div>
            </div> */}
            <button type="submit">Save</button>
          </form>
          <button onClick={closeModal}>Cancel</button>
        </Modal>
      }
    </>
  )
}

export default AddInventoryModal;

