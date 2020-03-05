import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import AddWarehouseModal from '../../components/AddWarehouseModal/AddWarehouseModal'

import "./allwarehouses.scss";
import SingleWarehouse from "../../components/SingleWarehouse/SingleWarehouse";
import SearchBar from "../../components/SearchBar/SearchBar";

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

  componentShouldUpdate() {
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
                  <Link className="warehouses__link" key={obj.id} to={`/warehouses/${obj.id}`}>
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
          <AddWarehouseModal isOpen={this.state.modalIsOpen} contentLabel="onRequestClose" onRequestClose={this.closeModal} closeModal={this.closeModal} portalClassName="AddWarehouseModal" getWarehouseList={this.getWarehouseList} />
        </div>
      </>
    )
  }
}

export default AllWarehouses;

