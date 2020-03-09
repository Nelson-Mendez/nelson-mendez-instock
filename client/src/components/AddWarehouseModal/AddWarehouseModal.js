import React from 'react';
import axios from "axios";
import Modal from 'react-modal';

import "./addwarehousemodal.scss";

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
          <form onSubmit={handleSubmit} className="modal-form">
            <h2 className="modal-form__heading">Add New</h2>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">WAREHOUSE</label>
                <input className="modal-form__input" name="name" placeholder="Name" />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">ID</label>
                <input className="modal-form__input modal-form__input--id" name="id" placeholder="ID" />
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">ADDRESS</label>
                <input className="modal-form__input" name="street" placeholder="Enter Address" />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">LOCATION</label>
                <select className="modal-form__input" name="location">
                  <option value="Toronto, CAN">Toronto, CAN</option>
                  <option value="Mississauga, CAN">Mississauga, CAN</option>
                  <option value="Vancouver, CAN">Vancouver, CAN</option>
                </select>
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">CONTACT NAME</label>
                <input className="modal-form__input" name="contactName" placeholder="Enter Name" />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">POSITION</label>
                <input className="modal-form__input" name="position" placeholder="Enter Position" />
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">PHONE NUMBER</label>
                <input className="modal-form__input" name="phone" placeholder="(000)-000-0000" />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">EMAIL</label>
                <input className="modal-form__input" name="email" type="email" placeholder="email@instock.com" />
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field modal-form__field--large">
                <label className="modal-form__label">CATEGORIES</label>
                <textarea
                  name="categories"
                  type="text"
                  className="modal-form__input modal-form__input--large"
                  placeholder="Use commas to separate each category"
                />
              </div>
            </div>
            <div className="modal-form__buttonwrap">
              <button className="modal-form__button modal-form__button--blue" type="submit">SAVE</button>
              <button className="modal-form__button" onClick={closeModal}>CANCEL</button>
            </div>
          </form>
        </Modal>
      }
    </>
  )
}

export default AddWarehouseModal;

