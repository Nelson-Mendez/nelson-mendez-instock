import React, { Component } from 'react';
import './nav.scss';
import logo from '../../assets/Logo/Logo-instock.svg';
import {Link, NavLink} from 'react-router-dom'




class Nav extends Component {

    constructor(props){
        super(props)
        this.state = {
            url : this.props.match
        }
    }
    
    render() {

        return (
            <nav class="Header">
            <ul class="Header__nav-list">
                <li class="Header__nav-list-item Header__nav-list-item--logo">
                    <Link to="/" class="Header__nav-link Header__nav-link--logo">
                        <img src={logo} alt="" className="Header__logo"/>
                    </Link>
                </li>
                <div class="Header__links-container">
                    <li class="Header__nav-list-item Header__nav-list--links">
                        <NavLink 
                            to="/inventory" 
                            className="Header__nav-link"
                            activeClassName="Header__nav-link Header__nav-link--active"
                            >
                            <span> Inventory</span>
                        </NavLink>
                    </li>
                    <li class="Header__nav-list-item Header__nav-list--links">
                        <NavLink 
                            to="/warehouses" 
                            className="Header__nav-link"
                            activeClassName="Header__nav-link Header__nav-link--active"    
                        >
                            Locations
                        </NavLink>
                    </li>
                </div>
            </ul>
        </nav>
        );
    }
}

export default Nav;