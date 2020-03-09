import React from "react";
import axios from "axios";
import ProductList from "../../components/ProductList/ProductList";
import backArrow from "../../assets/Icons/SVG/Icon-back-arrow.svg";
import "./onewarehouse.scss";
import { Link } from "react-router-dom";

class OneWarehouse extends React.Component {
  state = {
    warehouseData: [],
    loadedData: false
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/inventory/warehouses/${this.props.match.params.id}`
      )
      .then(response => {
        this.setState({
          warehouseData: response.data,
          loadedData: true
        });
      });
  }

  render() {
    if (this.state.loadedData) {
      return (
        <section className="OneWarehouse">
          <Link to="/warehouses">
            <h1 className="OneWarehouse__name">
              <img
                src={backArrow}
                alt="back arrow"
                className="OneWarehouse__backArrow"
              />
              {this.state.warehouseData.name}
            </h1>
          </Link>
          <div className="OneWarehouse__flex-container">
            <div>
              <h4 className="OneWarehouse__subheading">Address</h4>
              <p className="OneWarehouse__text">
                {this.state.warehouseData.address.street}
              </p>
              <p className="OneWarehouse__text">
                {this.state.warehouseData.address.location}
              </p>
            </div>
            <div>
              <h4 className="OneWarehouse__subheading">Contact</h4>
              <div className="OneWarehouse__address">
                <p className="OneWarehouse__text">
                  {this.state.warehouseData.contact.name}
                </p>
                <p className="OneWarehouse__text">
                  {this.state.warehouseData.contact.position}
                </p>
              </div>
              <div className="OneWarehouse__contact-info">
                <p className="OneWarehouse__text">
                  {this.state.warehouseData.contact.phone}
                </p>
                <p className="OneWarehouse__text">
                  {this.state.warehouseData.contact.email}
                </p>
              </div>
            </div>
          </div>

          <ProductList content={this.state.warehouseData.inventory} />
        </section>
      );
    } else {
      return "loading";
    }
  }
}

export default OneWarehouse;
