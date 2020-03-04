import React from 'react'; 
import '../SingleWarehouse/singlewarehouse.scss'; 
import axios from 'axios';
import ProductList from '../../components/ProductList/ProductList.js'; 

class SingleWarehouse extends React.Component {
    state = {
        warehouseData: [],
        loadedData: false
    }

    componentDidMount () {
        axios  
        .get(`http://localhost:8080/warehouses/${this.props.match.params.id}`)
        .then(response => {
            console.log(response.data);
            this.setState ({
                warehouseData: response.data,
                loadedData: true
            })
        })
    }

    render () {

        if (this.state.loadedData) {
            return (
                <>
                    <h1>{this.state.warehouseData.name}</h1>
                    <h4>Address</h4>
                        <p>{this.state.warehouseData.address.street}</p>
                        <p>{this.state.warehouseData.address.location}</p>
                    <h4>Contact</h4>
                        <p>{this.state.warehouseData.contact.name}</p>
                        <p>{this.state.warehouseData.contact.position}</p>
                        <p>{this.state.warehouseData.contact.phone}</p>
                        <p>{this.state.warehouseData.contact.email}</p>
                    <ProductList content={this.state.warehouseData.inventory} />
                </>
            )
        }
        else {return "loading"}
    }
};

export default SingleWarehouse; 