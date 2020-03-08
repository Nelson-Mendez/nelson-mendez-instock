import React from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';
import ProductList from '../../components/ProductList/ProductList.js';
import AddInventoryModal from '../../components/AddInventoryModal/AddInventoryModal';
import plusSign from '../../assets/Icons/SVG/Icon-add.svg'

import './allinventory.scss';


export default class AllInventory extends React.Component {

    state = {
        inventoryList:  [],
        loadedInventory: false,
        modalIsOpen: false
    }

    openModal = () => {
        this.setState({ modalIsOpen: true })
    }
    
    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }

    getInventoryList = () => {
        
        axios
        .get('http://localhost:8080/inventory')
        .then(response => {
            
            this.setState ({
                inventoryList: response.data,
                loadedInventory: true
            })
        })
        .catch(err => {
            throw err;
        })
    }

        

    componentDidMount () {
        this.getInventoryList();
    }

    updateInventory = (itemData) => {
        console.log(itemData)
        this.setState({
            inventoryList : itemData
        })
    }

    render () {

        if (this.state.loadedInventory) {
            return (
                <main className="inventory">

                    <h1 className="inventory__title">Inventory</h1>

                    <SearchBar />

                    {/* <TableHeader /> */}
    
                    <ProductList 
                        content={this.state.inventoryList} 
                        updateInventory = {this.updateInventory}
                    />

                    <button className="addButton" onClick={this.openModal}>
                        <img src={plusSign} />
                    </button>
                    
                    <AddInventoryModal isOpen={this.state.modalIsOpen} contentLabel="onRequestClose" onRequestClose={this.closeModal} closeModal={this.closeModal} portalClassName="AddInventoryModal" getInventoryList={this.getInventoryList} />
                                
               </main>
                
                   
                    
                        
                        
                        
                        

                        
        

                       
                        
                    
                
            )
        }
        else {return "loading"}
    }
}



// The user must be able to see a list of all inventory on the inventory tab. Each item has a name, description,
//  last ordered, location, quantity and status information. Each item also has a 3-dot ellipsis kebab menu  on the far 
//  right. Clicking an item in this view must take the user to the inventory details view.

// Create the UI and functionality for displaying the list of inventory items.

// This component will need state.

// Be sure to create a single item component that displays one row in this list.

// This component will also be used to display the inventory for a single warehouse. Your fetch to the back-end in this 
// component will differ depending on if a warehouse ID is provided or not provided. Be sure to collaborate with the person
//  who has the ticket “_Front-End: Warehouse Inventory List_“.

// Note: If the inventory endpoint on the back-end is not complete, use fake data until it is ready to be hooked up.
