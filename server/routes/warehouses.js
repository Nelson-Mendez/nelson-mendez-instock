const express = require("express");
const router = express.Router();
const locations = require("../data/locations.json");

router.post("/", (req, res) => {
  const data = req.body;
  const name = data.name;
  const id = data.id;
  const street = data.street;
  const location = data.location;
  const contactName = data.contactName;
  const position = data.position;
  const phone = data.phone;
  const email = data.email;
  const categories = data.categories;

  const address =
  {
    street: street,
    location: location
  }

  const contact =
  {
    contact: contactName,
    position: position,
    phone: phone,
    email: email
  }

  const uploadWarehouseObj =
  {
    id: id,
    name: name,
    address: address,
    contact: contact,
    inventoryCategories: categories
  }

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