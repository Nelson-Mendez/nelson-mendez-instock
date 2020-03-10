import React from "react";
import "./singleproduct.scss";
import { Link } from "react-router-dom";
import RemoveItem from "../RemoveItem/RemoveItem";

export default class SingleProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      itemId: this.props.content.id
    };
  }

  transferUpdatedInventory = itemId => {
    this.props.transferUpdatedInventory(itemId);
  };

  handleShowMenu(event) {
    event.preventDefault();
    if (this.state.showMenu === true) {
      this.setState({ showMenu: false });
    } else if (this.state.showMenu === false) {
      this.setState({ showMenu: true });
    }
  }

  render() {
    let status = "";
    this.props.content.isInstock === true
      ? (status = "In Stock")
      : (status = "Out of Stock");

    return (
      <div className="SingleProduct">
        <Link
          className="link"
          key={this.state.itemId}
          to={`/inventory/${this.state.itemId}`}
        >
          <div className="SingleProduct__container">
            <div className="SingleProduct__section-container SingleProduct__section-container--product">
              <h3 className="SingleProduct__title">item</h3>
              <p className="SingleProduct__information SingleProduct__information--name">{this.props.content.name}</p>
              <p className="SingleProduct__information SingleProduct__information--description">{this.props.content.description}</p>
            </div>

            <div className="SingleProduct__section-container SingleProduct__section-container--ordered">
              <h3 className="SingleProduct__title">Last Ordered</h3>
              <p className="SingleProduct__information">{this.props.content.lastOrdered}</p>
            </div>

            <div className="SingleProduct__section-container SingleProduct__section-container--location">
              <h3 className="SingleProduct__title">Locations</h3>
              <p className="SingleProduct__information">{this.props.content.city}, {this.props.content.country}</p>
            </div>

            <div className="SingleProduct__section-container SingleProduct__section-container--quantity">
              <h3 className="SingleProduct__title">QUANTITY</h3>
              <p className="SingleProduct__information">{this.props.content.quantity}</p>
            </div>

            <div className="SingleProduct__section-container SingleProduct__section-container--status">
              <h3 className="SingleProduct__title">STATUS</h3>
              <p className="SingleProduct__information">{status}</p>
            </div>
          </div>
        </Link>

        <div className="SingleProduct__removeButton">
          <div className="SingleProduct__section-container--button">
            <RemoveItem
              handleShowMenu={this.handleShowMenu.bind(this)}
              showMenu={this.state.showMenu}
              itemId={this.props.content.id}
              transferUpdatedInventory={this.transferUpdatedInventory}
            />
          </div>
        </div>
      </div>
    );
  }
}
