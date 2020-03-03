const express = require('express')
const uuid = require('uuid')
let inventoryData = require('../data/inventory.json')
const router = new express.Router();


router.post('/inventory/add', (req, res) => {
    const {body} = req

   if(!body.name || !body.city || !body.country){
       return res.status(400).send('Please input name, city, and country')
   }

    inventoryData.push({
        id: uuid.v4(),
        ...body,
    })

    res.send(inventoryData)

})

router.delete('/inventory/:id', (req, res) => {
    const _id = req.params.id

    const found = inventoryData.some(inventory => inventory.id === _id)

    if(!found){
        return res.status(400).send(`No inventory item is id: ${_id}`)
    }

    let updatedInventory = inventoryData.filter(inventory => inventory.id !== _id)

    inventoryData = updatedInventory

    res.send(inventoryData)

})




module.exports = router