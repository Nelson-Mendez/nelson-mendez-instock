const express = require('express');
const app = express(); 
const cors = require('cors'); 
const warehouseRoutes = require('./routes/warehouseRoutes');
const inventoryRouter = require ('./routes/inventoryRoutes');

// CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Express.json middleware
app.use(express.json()); 

app.use('/warehouse', warehouseRoutes); 
app.use('/inventory', inventoryRouter);

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});