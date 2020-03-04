import React from 'react';
import Kebab from '../../assets/Icons/SVG/Icon-kebab-default.svg';
import './singleproduct.scss'

export default function SingleProduct (props) {
    
    // const status = "";
    // (props.content.status === true ? status = "In Stock" : status = "Out of Stock");

    return (
        <div className="item">

            <p className="item__heading">ITEM</p>
            <p className="item__detail item__detail--bold">{props.content.name}</p>
            <p className="item__detail">{props.content.description}</p>

    
            <p className="item__heading">LAST ORDERED</p>
            <p className="item__detail">{props.content.lastOrdered}</p>

            <p className="item__heading">LOCATION</p>
            <p className="item__detail">{props.content.city}, {props.content.country}</p>

            <p className="item__heading">QUANTITY</p>
            <p className="item__detail">{props.content.quantity}</p>

            <p className="item__heading">STATUS</p>
            {/* <p className="item__detail">{status}</p> */}

            {/* <Kebab /> */}

        </div>
    )

}