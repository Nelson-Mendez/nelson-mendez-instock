const router = require('express').Router();
const inventoryPath = require('../data/inventory.json');

router.get('/', (req, res) => {
    return res.status(200).send(inventoryPath);
})

module.exports = router;
