import React from 'react'
import './nav.scss';
import logo from '../../assets/Logo/Logo-instock.svg';
import {Link} from 'react-router-dom'


export default function Nav() {
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
                        <Link to="/inventory" class="Header__nav-link Header__nav-link--active">
                            <span> Inventory</span>
                        </Link>
                    </li>
                    <li class="Header__nav-list-item Header__nav-list--links">
                        <Link to="/locations" class="Header__nav-link Header__nav-link--location">
                            Locations
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>

    )
}
