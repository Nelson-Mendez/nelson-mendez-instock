const express = require('express'); 
const router = express.Router(); 
// const uuid = require('uuid-random'); 
const inventory = require('../data/inventory.json'); 
const locations = require('../data/locations.json');

router.get('/:id', (req, res) => {
    const warehouseId = req.params.id; 
    let foundWarehouse = locations.find(location => {
        return warehouseId === location.id; 
    }); 

    let associatedInventory = inventory.filter(object => {
        return warehouseId === object.warehouseId; 
    })

    if (!foundWarehouse) {
        return res.status(404).send('Request Rejected'); 
    }
    foundWarehouse = {
        ...foundWarehouse,
        inventory: associatedInventory,
    }
    res.send(foundWarehouse);
}); 

module.exports = router; 