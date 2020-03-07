import React from 'react';
import {Link} from 'react-router-dom';
import SingleProduct from '../../components/SingleProduct/SingleProduct';


export default function ProductList (props) {
    
    const { content } = props;

    const transferUpdatedInventory = (itemId) => {
        console.log(itemId, 'in the productlist')
        props.updateInventory(itemId)
    }

    return ( 
        <> 
            {content.map(item => {
                return (<Link className="link" key={item.id} to={`/inventory/${item.id}`}>
                    <SingleProduct 
                        content={item}
                        transferUpdatedInventory = {transferUpdatedInventory}
                    />
                </Link>);
            })}
        </>
    )
}