import React from 'react';
import axios from 'axios';
import ProductList from '../../components/ProductList/ProductList';
import './onewarehouse.scss';

class OneWarehouse extends React.Component {
  state = {
    warehouseData: [],
    loadedData: false
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8080/warehouses/${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          warehouseData: response.data,
          loadedData: true
        })
      })
  }

  render() {

    if (this.state.loadedData) {
      return (
        <>
          <h1>{this.state.warehouseData.name}</h1>
          <h4>Address</h4>
          <p>{this.state.warehouseData.address.street}</p>
          <p>{this.state.warehouseData.address.location}</p>
          <h4>Contact</h4>
          <p>{this.state.warehouseData.contact.name}</p>
          <p>{this.state.warehouseData.contact.position}</p>
          <p>{this.state.warehouseData.contact.phone}</p>
          <p>{this.state.warehouseData.contact.email}</p>
          <ProductList content={this.state.warehouseData.inventory} />
        </>
      )
    }
    else { return "loading" }
  }
};

export default OneWarehouse;

// import React from "react";

// import "./onewarehouse.scss";
// import arrowright from "../../assets/Icons/SVG/Icon-arrow-right.svg";

// const OneWarehouse = ({ id, name, address, contact, categories }) => {
//   return (
//     <>
//       <div className="warehouseItem__block warehouseItem__block--first">
//         <h2 className="warehouseItem__heading">{name}</h2>
//         <p className="warehouseItem__info">{address.street}, {address.location}</p>
//         <img className="warehouseItem__image" src={arrowright} />
//       </div>
//       <div className="warehouseItem__block">
//         <p className="warehouseItem__info">{contact.name}</p>
//         <p className="warehouseItem__info warehouseItem__info--italic">{contact.position}</p>
//       </div>
//       <div className="warehouseItem__block">
//         <p className="warehouseItem__info">{contact.phone}</p>
//         <p className="warehouseItem__info">{contact.email}</p>
//       </div>
//       <div className="warehouseItem__block">
//         <p className="warehouseItem__info">{categories}</p>
//       </div>
//     </>
//   )
// }

// export default OneWarehouse;
