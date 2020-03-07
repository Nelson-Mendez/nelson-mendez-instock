import React from 'react';
import kebab from '../../assets/Icons/SVG/Icon-kebab-default.svg'; 
import axios from 'axios'

const RemoveItem = (props) => {

    // const displayShowMenu = props.showMenu ?  : null;

        const removeItem = () => {
            axios
            .delete(`http://localhost:8080/inventory/${props.itemId}`)
            .then(response => {
                props.transferUpdatedInventory(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        }

        return (
            <div className="container">
                <button onClick={props.handleShowMenu} {...props} type="button" class="button">
                    <img src={kebab} className="kebab" />
                </button>
                {props.showMenu &&
                <div className="dropdown" onClick={removeItem} style ={{backgroundColor: 'yellow'}}>
                    <button className="dropdown__text">Remove</button>
                </div>
}
            </div>
        )
}

export default RemoveItem; 