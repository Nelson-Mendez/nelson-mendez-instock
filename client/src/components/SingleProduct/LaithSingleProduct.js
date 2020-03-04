import React from 'react'
import './laithsingleproduct.scss';
import deleteBtn from '../../assets/Icons/SVG/Icon-kebab-default.svg';

export default function SingleProduct() {
    return (
        <div className="SingleProduct">
            <div className="SingleProduct__container">
                <div className="SingleProduct__section-container SingleProduct__section-container--product">
                    <h3 className="SingleProduct__title">
                        item
                    </h3>
                    <h1 className="SingleProduct__information SingleProduct__information--name">
                        Product Name Here
                    </h1>
                    <p className="SingleProduct__information SingleProduct__information--description">
                        Here is a very brief description of the product in the inventory…
                    </p>
                </div>

                <div className="SingleProduct__section-container">
                    <h3 className="SingleProduct__title">
                        Last Ordered
                    </h3>
                    <p className="SingleProduct__information">
                        05/24/2018
                    </p>
                </div>

                <div className="SingleProduct__section-container">
                    <h3 className="SingleProduct__title">
                        Locations
                    </h3>
                    <p className="SingleProduct__information">
                        Toronto, CAN
                    </p>
                </div>

                <div className="SingleProduct__section-container">
                    <h3 className="SingleProduct__title">
                        QUANTITY
                    </h3>
                    <p className="SingleProduct__information">
                        12,000
                    </p>
                </div>

                <div className="SingleProduct__section-container">
                    <h3 className="SingleProduct__title">
                        STATUS
                    </h3>
                    <p className="SingleProduct__information">
                        In Stock
                    </p>
                </div>

                <div className="SingleProduct__section-container SingleProduct__section-container--button">
                    <button className="SingleProduct__delete-btn">
                        <img src={deleteBtn} alt="" className="SingleProduct__kebab"/>
                    </button>
                </div>

            </div>
        </div>
    )
}
