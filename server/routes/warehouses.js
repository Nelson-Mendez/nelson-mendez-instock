const express = require("express");
const router = express.Router();
const locations = require("../data/locations.json");

// create an endpoint that will create a new warehouse
// if the data is malformed or if a field is missing, return a 400 status, rejecting the POST request
// return new list of warehouses back to the front-end on success


router.post("/", (req, res) => {
  const data = req.body;
  const name = data.name;
  const id = data.id;
  const street = data.street;
  const location = data.location;
  const contact = data.contact;
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
    contact: contact,
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

  locations.unshift(uploadWarehouseObj);
  res.send(locations);
})