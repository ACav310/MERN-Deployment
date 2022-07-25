const PirateController = require("../controllers/pirate.controller");
const Pirate = require("../models/pirates.model");

module.exports = app => {
    // CREATE 
    app.post("/api/pirates/new", PirateController.createPirate);
    // READ ONE
    app.get("/api/pirates/:_id", PirateController.findOnePirate);
    // READ ALL 
    app.get("/api/pirates", PirateController.findAllPirates);
    // UPDATE 
    app.put("/api/pirates/update/:_id", PirateController.updatePirate);
    // DELETE
    app.delete("/api/pirates/delete/:_id", PirateController.deletePirate);
}