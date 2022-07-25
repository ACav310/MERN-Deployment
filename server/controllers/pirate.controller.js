const Pirate = require("../models/pirates.model");
// CRUD Commands

// CREATE
module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err=> res.json({message: "Something went wrong creating a pirate!", error: err}))
}

// READ ONE
module.exports.findOnePirate = (req,res) => {
    Pirate.find({_id: req.params._id})
        .then(singlePirate => res.json(singlePirate))
        .catch(err=> res.json({message: "Something went wrong finding one pirate!", error: err}))
}

// READ ALL
module.exports.findAllPirates = (req,res) => {
    Pirate.find()
        .then(allPirates => res.json(allPirates))
        .catch(err=> res.json({message: "Something went wrong finding all pirates", error: err}))
}

// UPDATE
module.exports.updatePirate = (req,res) => {
    Pirate.findOneAndUpdate({_id: req.params._id}, req.body, {new: true, runValidators: true})
        .then(updatePirate => res.json(updatePirate))
        .catch(err=> res.json({message: "Something went wrong updating pirate!", error: err}))
}
// DELETE
module.exports.deletePirate = (req,res) => {
    Pirate.deleteOne({_id: req.params._id})
        .then(res.json({message: "pirate was successfully removed"}))
        .catch(err=> res.json({message: "Something went wrong deleting pirate", error: err}))
}
