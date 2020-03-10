const router = require("express").Router();
let inventoryData = require("../data/inventory.json");
const locations = require("../data/locations.json");
const uuid = require("uuid");

router.get("/", (req, res) => {
  return res.status(200).send(inventoryData);
});

router.get("/:id", (req, res) => {
  const itemExists = inventoryData.some(item => item.id === req.params.id);

  if (!itemExists) {
    return res
      .status(404)
      .send(`Item with id: ${req.params.id} not in inventory!`);
  } else {
    const item = inventoryData.filter(item => item.id === req.params.id);
    return res.status(200).send(item);
  }
});

router.get("/warehouses/:id", (req, res) => {
  const warehouseId = req.params.id;
  let foundWarehouse = locations.find(location => {
    return warehouseId === location.id;
  });

  let associatedInventory = inventoryData.filter(object => {
    return warehouseId === object.warehouseId;
  });

  if (!foundWarehouse) {
    return res.status(404).send("Request Rejected");
  }
  foundWarehouse = {
    ...foundWarehouse,
    inventory: associatedInventory
  };
  res.send(foundWarehouse);
});

router.post("/add", (req, res) => {
  const { body } = req;

  for (const key in body) {
    if (!body[key] && key !== "description") {
      return res.status(400).send("Invalid data");
    }
  }
  inventoryData.push({
    id: uuid.v4(),
    ...body
  });
  res.send(inventoryData);
});

router.delete("/:id", (req, res) => {
  const _id = req.params.id;

  const found = inventoryData.some(inventory => inventory.id === _id);

  if (!found) {
    return res.status(400).send(`No inventory item is id: ${_id}`);
  }

  let updatedInventory = inventoryData.filter(
    inventory => inventory.id !== _id
  );

  inventoryData = updatedInventory;

  res.send(inventoryData);
});

module.exports = router;
