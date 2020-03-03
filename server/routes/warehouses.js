const express = require("express");
const router = express.Router();
const locations = require("../data/locations.json");

router.post("/", (req, res) => {
  const data = req.body;

  // populates address object
  const address =
  {
    street: data.street,
    location: data.location
  }

  // populates contact object
  const contact =
  {
    contact: data.contactName,
    position: data.position,
    phone: data.phone,
    email: data.email
  }

  // new warehouse object, includes address and contact objects
  const uploadWarehouseObj =
  {
    id: data.id,
    name: data.name,
    address: data.address,
    contact: data.contact,
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

  locations.unshift(uploadWarehouseObj);
  res.send(locations);
})

module.exports = router;