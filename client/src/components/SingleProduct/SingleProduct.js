import React from 'react'
import {Link} from 'react-router-dom';
import './singleproduct.scss';
import RemoveItem from '../RemoveItem/RemoveItem'; 
import axios from 'axios';

export default class SingleProduct extends React.Component {
    constructor(props) {
        super(props)

        this.state={
          showMenu: false,
          itemId: this.props.content.id
        }
        // this.handleShowMenu = this.handleShowMenu.bind(this);
    }

    transferUpdatedInventory = (itemId) => {
        console.log(itemId, 'in the SingleProduct')
        this.props.transferUpdatedInventory(itemId)
    }

    handleShowMenu (event){
        // DELETE AXIOS CALL // 
        
        event.preventDefault(); 
        // event.stopPropagation();
        if(this.state.showMenu === true) {
            this.setState({ showMenu: false });
        }
        else if(this.state.showMenu === false) {
            this.setState({ showMenu: true });
        }
    }    


    render(){

    let status = "";
    (this.props.content.isInstock === true ? status = "In Stock" : status = "Out of Stock");
    return (
        <div className="SingleProduct">
            <div className="SingleProduct__container">
            {/* <Link className="link" key={this.props.content.id} to={`/inventory/${this.props.content.id}`}> */}
                <div className="SingleProduct__section-container SingleProduct__section-container--product">
                    <h3 className="SingleProduct__title">
                        item
                    </h3>
                    <p className="SingleProduct__information SingleProduct__information--name">
                        {this.props.content.name}
                    </p>
                    <p className="SingleProduct__information SingleProduct__information--description">
                    {this.props.content.description}
                    </p>
                </div>

                <div className="SingleProduct__section-container">
                    <h3 className="SingleProduct__title">
                        Last Ordered
                    </h3>
                    <p className="SingleProduct__information">
                    {this.props.content.lastOrdered}
                    </p>
                </div>

                <div className="SingleProduct__section-container">
                    <h3 className="SingleProduct__title">
                        Locations
                    </h3>
                    <p className="SingleProduct__information">
                    {this.props.content.city}, {this.props.content.country}
                    </p>
                </div>

                <div className="SingleProduct__section-container">
                    <h3 className="SingleProduct__title">
                        QUANTITY
                    </h3>
                    <p className="SingleProduct__information">
                    {this.props.content.quantity}
                    </p>
                </div>

                <div className="SingleProduct__section-container">
                    <h3 className="SingleProduct__title">
                        STATUS
                    </h3>
                    <p className="SingleProduct__information">
                    {status}
                    </p>
                </div>
                {/* </Link> */}
                <div className="SingleProduct__section-container SingleProduct__section-container--button">
                    <RemoveItem 
                        handleShowMenu={this.handleShowMenu.bind(this)} 
                        showMenu={this.state.showMenu}
                        itemId = {this.props.content.id}
                        transferUpdatedInventory = {this.transferUpdatedInventory}
                    />
                </div>

            </div>
        </div>
    )
    }
}

/*
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
            {/* <p className="item__detail">{status}</p> */

            
/*
        </div>
    )

}

*/