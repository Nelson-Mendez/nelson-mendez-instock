import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from 'react-modal';

import "./allwarehouses.scss";
import SingleWarehouse from "../../components/SingleWarehouse/SingleWarehouse";
import SearchBar from "../../components/SearchBar/SearchBar";

Modal.setAppElement('#root');
const URL = "http://localhost:8080/"

class AllWarehouses extends React.Component {
  constructor() {
    super();
    this.state = {
      warehouseList: [],
      modalIsOpen: false
    }
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  // afterOpenModal = () => {

  // }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  getWarehouseList = () => {
    axios
      .get(`${URL}warehouses`)
      .then(res => {
        console.log(res.data);
        this.setState({
          warehouseList: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getWarehouseList();
  }

  render() {
    return (
      <>
        <div className="warehouses">
          <div className="warehouses__title-wrap">
            <h1 className="warehouses__title">Locations</h1>
            <SearchBar />
          </div>
          <div className="warehouses__subheading-wrap">
            <h3 className="warehouses__subheading">WAREHOUSE</h3>
            <h3 className="warehouses__subheading">CONTACT</h3>
            <h3 className="warehouses__subheading">CONTACT INFORMATION</h3>
            <h3 className="warehouses__subheading">CATEGORIES</h3>
          </div>
          <div className="warehouses__list">
            {this.state.warehouseList.map(obj => {
              return (
                <div className="warehouses__item" key={obj.id}>
                  <Link to={`/warehouses/${obj.id}`}>
                    <SingleWarehouse
                      id={obj.id}
                      name={obj.name}
                      address={obj.address}
                      contact={obj.contact}
                      categories={obj.inventoryCategories}
                    />
                  </Link>
                </div>
              )
            })}
          </div>
          <button onClick={this.openModal}>
            PLUS SIGN GOES HERE
          </button>
          <Modal isOpen={this.state.modalIsOpen} contentLabel="onRequestClose" onRequestClose={this.closeModal}>
            <p>MODAAAAAAAAL BB</p>
            <button onClick={this.closeModal}>Cancel</button>
          </Modal>
        </div>
      </>
    )
  }
}

export default AllWarehouses;

