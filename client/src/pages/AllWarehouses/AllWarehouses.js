import React from "react";
import { Link } from "react-router-dom";

import "./allwarehouses.scss";
import OneWarehouse from "../OneWarehouse/OneWarehouse";

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
      .then(res => {
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
        <div className="warehouses__list">
          <div className="warehouses__title-wrap">
            <h1 className="warehouses__title">Locations</h1>
            <p>SEARCH BAR SHOULD GO HERE</p>
          </div>
          {this.state.warehouseList.map(obj => {
            return (
              <div className="warehouses__item" key={obj.id}>
                <Link to={`/warehouses/${obj.id}`}>
                  <OneWarehouse
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
      </>
    )
  }
}

export default AllWarehouses;