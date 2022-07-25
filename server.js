// boiler plate 
const express = require('express');
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());

// we will add our connection to the config file
require("./server/config/mongoose.config")

//boiler plate - POST DATA
app.use(express.json(), express.urlencoded({extended: true}));

// we will add connection to our routes must be below code on line 12
const AllMYRoutes = require("./server/routes/pirates.routes");
AllMYRoutes(app);

//boiler plate
app.listen(port, () => console.log(`Running on port ${port} :)`))