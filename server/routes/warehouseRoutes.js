const express = require('express'); 
const router = express.Router(); 
// const uuid = require('uuid-random'); 
const inventory = require('../data/inventory.json'); 
const locations = require('../data/locations.json');

router.get("/", (req, res) => {
    res.send(locations);
  });
  
  router.post("/", (req, res) => {
    const data = req.body;
    
    // new warehouse object, includes address and contact objects
    const uploadWarehouseObj =
    {
      id: data.id,
      name: data.name,
      address: {
        street: data.street,
        location: data.location
      },
      contact: {
        name: data.contactName,
        position: data.position,
        phone: data.phone,
        email: data.email
      },
      inventoryCategories: data.categories
    }
  
    // will send status and rejection if any fields are empty
    Object.values(uploadWarehouseObj).forEach(value => {
      if (!value) {
        return res.status(400).send("rejected: malformed data or data missing from a field")
      }
    })
  
    Object.values(uploadWarehouseObj.address).forEach(value => {
      if (!value) {
        return res.status(400).send("rejected: malformed data or data missing from a field")
      }
    })
  
    Object.values(uploadWarehouseObj.contact).forEach(value => {
      if (!value) {
        return res.status(400).send("rejected: malformed data or data missing from a field")
      }
    })
  
    locations.push(uploadWarehouseObj);
    res.send(locations);
  })

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