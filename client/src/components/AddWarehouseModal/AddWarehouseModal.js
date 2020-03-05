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
          <form>
            <div className="modal-form__data">
              <label className="modal-form__label">WAREHOUSE</label>
              <input className="modal-form__name" name="name" placeholder="Name" required />
              <input className="modal-form__name" name="name" placeholder="Id" required />
            </div>
            <div className="modal-form__data">
              <label className="modal-form__label">ADDRESS</label>
              <input className="modal-form__name" name="name" placeholder="Name" required />
              <label className="modal-form__label">LOCATION</label>
              <input className="modal-form__name" name="name" placeholder="Name" required />
            </div>
            {/* <textarea
                name="comment"
                type="text"
                className="form__input"
                placeholder="That was easily the most spectacular BMX moment ever."
                required
              /> */}
          </form>
          <button onClick={closeModal}>Cancel</button>
        </Modal>
      }
    </>
  )
}

export default AddWarehouseModal;
        // Modal.setAppElement('#root');

