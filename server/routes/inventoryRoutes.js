const router = require('express').Router();
const inventoryPath = require('../data/inventory.json');
const uuid = require('uuid')

router.get('/', (req, res) => {
    return res.status(200).send(inventoryPath);
})

router.get('/:id', (req, res) => {

    const itemExists = inventoryPath.some(item => item.id === req.params.id)

    if(!itemExists){
        return res.status(404).send(`Item with id: ${req.params.id} not in inventory!`)
    }
    else {
        const item = inventoryPath.filter(item => item.id === req.params.id);
        return res.status(200).send(item)
    }
})

router.post('/add', (req, res) => {
    const {body} = req
    console.log(body)
    
  
   for(const key in body){
       if(!body[key] && key !== 'isInstock'){
            return res.status(400).send('Invalid data')
       }
   }
    inventoryData.push({
        id: uuid.v4(),
        ...body,
    })
    res.send(inventoryData)
})

router.delete('/:id', (req, res) => {
    const _id = req.params.id
    const found = inventoryData.some(inventory => inventory.id === _id)
    if(!found){
        return res.status(400).send(`No inventory item is id: ${_id}`)
    }
    let updatedInventory = inventoryData.filter(inventory => inventory.id !== _id)
    inventoryData = updatedInventory
    res.send(inventoryData)
})

module.exports = router;