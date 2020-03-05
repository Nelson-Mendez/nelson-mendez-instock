import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Modal from 'react-modal';

import "./addwarehousemodal.scss";

Modal.setAppElement('#root');

const URL = "http://localhost:8080/"

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
}

const AddWarehouseModal = ({ isOpen, closeModal, getWarehouseList }) => {

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .post(`${URL}warehouses`, {
        id: event.target.id.value,
        name: event.target.name.value,
        street: event.target.street.value,
        location: event.target.location.value,
        contactName: event.target.contactName.value,
        position: event.target.position.value,
        phone: event.target.phone.value,
        email: event.target.email.value,
        categories: event.target.categories.value
      })
      .then(res => {
        getWarehouseList();
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
          <h2 className="modal-form__heading">Add New</h2>
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">WAREHOUSE</label>
                <input className="modal-form__name" name="name" placeholder="Name" />
              </div>
              <div className="modal-form__field">
                <input className="modal-form__name" name="id" placeholder="Id" />
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">ADDRESS</label>
                <input className="modal-form__name" name="street" placeholder="Address" />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">LOCATION</label>
                <input className="modal-form__name" name="location" placeholder="Location" />
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">CONTACT NAME</label>
                <input className="modal-form__name" name="contactName" placeholder="Enter Name" />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">POSITION</label>
                <input className="modal-form__name" name="position" placeholder="Enter Position" />
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">PHONE NUMBER</label>
                <input className="modal-form__name" name="phone" placeholder="(000) - 000 - 0000" />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">EMAIL</label>
                <input className="modal-form__name" name="email" placeholder="email@instock.com" />
              </div>
            </div>
            <div className="modal-form__row">
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
            </div>
            <button type="submit">Save</button>
          </form>
          <button onClick={closeModal}>Cancel</button>
        </Modal>
      }
    </>
  )
}

export default AddWarehouseModal;

