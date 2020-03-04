import React from 'react'
import './nav.scss';
import logo from '../../assets/Logo/Logo-instock.svg'

export default function Nav() {
    return (
        <nav class="Header">
            <ul class="Header__nav-list">
                <li class="Header__nav-list-item Header__nav-list-item--logo">
                    <a href="" class="Header__nav-link Header__nav-link--logo">
                        <img src={logo} alt="" className="Header__logo"/>
                    </a>
                </li>
                <div class="Header__links-container">
                    <li class="Header__nav-list-item Header__nav-list--links">
                        <a href="./index.html" class="Header__nav-link Header__nav-link--active">
                            <span> Inventory</span>
                        </a>
                    </li>
                    <li class="Header__nav-list-item Header__nav-list--links">
                        <a href="./shows.html" class="Header__nav-link">
                            Locations
                        </a>
                    </li>
                </div>
            </ul>
        </nav>

    )
}
