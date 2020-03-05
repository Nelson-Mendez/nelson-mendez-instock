import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import "./addwarehousemodal.scss";

Modal.setAppElement('#root');

const AddWarehouseModal = ({ isOpen, closeModal }) => {

  // const { handleSubmit } = props;

  // const handleChange = e => {
  //   e.preventDefault();
  //   handleSubmit(e.target.comment.value);
  //   e.target.reset();
  // };
  return (
    <>
      {isOpen &&
        <Modal isOpen={isOpen}>
          <h2 className="modal-form__heading">Add New</h2>
          <form className="modal-form">
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">WAREHOUSE</label>
                <input className="modal-form__name" name="name" placeholder="Name" required />
              </div>
              <div className="modal-form__field">
                <input className="modal-form__name" name="name" placeholder="Id" required />
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">ADDRESS</label>
                <input className="modal-form__name" name="name" placeholder="Address" required />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">LOCATION</label>
                <input className="modal-form__name" name="name" placeholder="Location" required />
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">CONTACT NAME</label>
                <input className="modal-form__name" name="name" placeholder="Enter Name" required />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">POSITION</label>
                <input className="modal-form__name" name="name" placeholder="Enter Position" required />
              </div>
            </div>
            <div className="modal-form__row">
              <div className="modal-form__field">
                <label className="modal-form__label">PHONE NUMBER</label>
                <input className="modal-form__name" name="name" placeholder="(000) - 000 - 0000" required />
              </div>
              <div className="modal-form__field">
                <label className="modal-form__label">EMAIL</label>
                <input className="modal-form__name" name="name" placeholder="email@instock.com" required />
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


          </form>
          <button onClick={closeModal}>Cancel</button>
        </Modal>
      }
    </>
  )
}

export default AddWarehouseModal;
        // Modal.setAppElement('#root');

