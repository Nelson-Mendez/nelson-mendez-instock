import React from "react";
import { Link } from "react-router-dom";

import "./allwarehouses.scss";

const URL = "http://localhost:8080/"

class AllWarehouses extends React.Component {
  constructor() {
    super();
    this.state = {
      warehouseList: []
    }
  }

  getWarehouseList = () => {
    axios
      .get(`${URL}warehouses`)
      .then
  }

  render() {
    return (
      <>
      </>
    )
  }
}

export default AllWarehouses;