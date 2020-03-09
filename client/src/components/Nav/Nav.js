import React, { Component } from "react";
import "./nav.scss";
import logo from "../../assets/Logo/Logo-instock.svg";
import { NavLink, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="Nav__container">
          <div className="Nav__logo-container">
            <Link to="/warehouses" className="Nav__link">
              <img src={logo} alt="instock logo" className="Nav__logo" />
            </Link>
          </div>
          <div className="Nav__links-container">
            <ul className="Nav__list">
              <li className="Nav__list-item">
                <NavLink
                  to="/inventory"
                  className="Nav__link"
                  activeClassName="Nav__link Nav__link--active"
                >
                  Inventory
                </NavLink>
              </li>
              <li className="Nav__list-item">
                <NavLink
                  to="/warehouses"
                  className="Nav__link"
                  activeClassName="Nav__link Nav__link--active"
                >
                  Locations
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
