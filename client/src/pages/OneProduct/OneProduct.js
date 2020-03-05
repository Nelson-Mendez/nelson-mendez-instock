import React, { Component } from 'react';
import axios from 'axios';
import './oneproduct.scss';
import backButton from '../../assets/Icons/SVG/Icon-back-arrow.svg';
import {Link} from 'react-router-dom';


class OneProduct extends Component {

    constructor(props){
        super(props)
        this.state = {
            itemData : "",
            warehouseData: ""
        }
    }

    getProductData = () => {
        let url = `http://localhost:8080/inventory/${this.props.match.params.id}`
        axios
        .get(url)
        .then(response => {
            
            this.setState({
                itemData : response.data[0]
            }, () => {
                let url = `http://localhost:8080/warehouses/${this.state.itemData.warehouseId}`
                axios
                .get(url)
                .then(response => {
                    this.setState({
                     warehouseData : response.data
                    })
                })
            })
        })
        .catch(error => {
            console.log('Error ', error)
        })
    }


    componentDidMount(){
        this.getProductData()
    }


    render() {
        console.log(this.state.warehouseData.contact)
        return (
            <>
               
                <div className="OneProduct">
                <div className="OneProduct__container">
                    <div className="OneProduct__header-container">
                            <div className="OneProduct__name-container">
                                <h2 className="OneProduct__header">
                                    <Link to="/inventory">
                                        <img src={backButton} alt="" className="OneProduct__backBtn"/>
                                    </Link>
                                    
                                    {this.state.itemData.name}
                                </h2>
                            </div>
                            {this.state.itemData.isInstock ? (
                                <button className="OneProduct__stock-btn OneProduct__stock-btn--instock">
                                    In Stock
                                </button>) : (
                                <button className="OneProduct__stock-btn OneProduct__stock-btn--outstock">
                                    Out of Stock
                                </button>
                            )}
                    </div>
                        
                        <div className="OneProduct__all-sections-container">
                            <div className="OneProduct__section-container OneProduct__section-container--description">
                                <h3 className="OneProduct__title">
                                    Item Description
                                </h3>
                                <p className="OneProduct__info">
                                    {this.state.itemData.description}
                                </p>
                            </div>

                            <div className="OneProduct__information-container">
                                <div className="OneProduct__sections-container">
                                    <div className="OneProduct__section-container">
                                        <h3 className="OneProduct__title">
                                                ORDERED BY
                                        </h3>
                                        <p className="OneProduct__info">
                                                {this.state.warehouseData.contact && this.state.warehouseData.contact.name}
                                        </p>
                                    </div>

                                    <div className="OneProduct__section-container">
                                        <h3 className="OneProduct__title">
                                            Reference Number
                                        </h3>
                                        <p className="OneProduct__info">
                                            {this.state.itemData.id}
                                        </p>
                                    </div>
                                </div>

                                <div className="OneProduct__sections-container">
                                    <div className="OneProduct__section-container">
                                        <h3 className="OneProduct__title">
                                            Last Ordered
                                        </h3>
                                        <p className="OneProduct__info">
                                            {this.state.itemData.lastOrdered}
                                        </p>
                                    </div>

                                    <div className="OneProduct__section-container">
                                        <h3 className="OneProduct__title">
                                            Location
                                        </h3>
                                        <p className="OneProduct__info">
                                            {this.state.itemData.city}
                                        </p>
                                    </div>
                                </div>

                                <div className="OneProduct__section-container">
                                    <h3 className="OneProduct__title">
                                            QUANTITY
                                    </h3>
                                    <p className="OneProduct__info">
                                        {this.state.itemData.quantity}
                                    </p>
                                </div>

                                <div className="OneProduct__section-container OneProduct__section-container--category">
                                    <h3 className="OneProduct__title">
                                        Categories
                                    </h3>
                                    <p className="OneProduct__info">
                                        {this.state.itemData.categories}
                                    </p>
                                </div>
                            </div>
                    </div>

                    <button className="OneProduct__edit-btn">
                            Edit
                        </button>
                </div>

                </div>
            </>
        );
    }
}

export default OneProduct;