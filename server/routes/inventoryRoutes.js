const router = require('express').Router();
const inventoryPath = require('../data/inventory.json');

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

module.exports = router;