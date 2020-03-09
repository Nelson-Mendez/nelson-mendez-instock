import React from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductList from "../../components/ProductList/ProductList.js";
import AddProductModal from "../../components/AddProductModal/AddProductModal";
import plusSign from "../../assets/Icons/SVG/Icon-add.svg";

import "./allinventory.scss";

export default class AllInventory extends React.Component {
  state = {
    inventoryList: [],
    loadedInventory: false,
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  getInventoryList = () => {
    axios
      .get("http://localhost:8080/inventory")
      .then(response => {
        this.setState({
          inventoryList: response.data,
          loadedInventory: true
        });
      })
      .catch(err => {
        throw err;
      });
  };

  componentDidMount() {
    this.getInventoryList();
  }

  updateInventory = itemData => {
    this.setState({
      inventoryList: itemData
    });
  };

  render() {
    if (this.state.loadedInventory) {
      return (
        <main className="inventory">
          <div className="inventory__header">
            <h1 className="inventory__title">Inventory</h1>
            <SearchBar />
          </div>

          <div className="inventory__table-heading">
            <h3 className="inventory__table--large">ITEM</h3>
            <h3 className="inventory__table">LAST ORDERED</h3>
            <h3 className="inventory__table">LOCATIONS</h3>
            <h3 className="inventory__table">QUANTITY</h3>
            <h3 className="inventory__table">STATUS</h3>
          </div>

          <ProductList
            content={this.state.inventoryList}
            updateInventory={this.updateInventory}
          />

          <button className="addButton" onClick={this.openModal}>
            <img className="addButton__plus" src={plusSign} alt="plus sign" />
          </button>

          <AddProductModal
            isOpen={this.state.modalIsOpen}
            contentLabel="onRequestClose"
            closeModal={this.closeModal}
            portalClassName="AddProductModal"
            getInventoryList={this.getInventoryList}
          />
        </main>
      );
    } else return "loading";
  }
}
