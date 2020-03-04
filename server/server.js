const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser = require('body-parser')
const warehouseRouter = require('./routes/warehouseRoutes');
const inventoryRouter = require('./routes/inventoryRoutes');


// CORS middleware

app.use(cors());


// Express.json middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes Middleware 

app.use('/warehouses', warehouseRouter);
app.use('/inventory', inventoryRouter);


app.listen(8080, () => {
  console.log('Server Started on http://localhost:8080');
  console.log('Press CTRL + C to stop server');
});