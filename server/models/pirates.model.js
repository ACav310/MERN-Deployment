const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate must have a name."]
    },
    propic: {
        type: String,
        required: [true, "Pirate must have a profile picture."]
    },
    treasures: {
        type: Number,
        required: [true, "Pirate should have at least 1 treasure to be a real pirate."]
    },
    catchphrase: {
        type: String,
        required: [true, "Pirates need a catch phrase!"]
    },
    position: {
        type: String,
        required: [true, "Pirate needs a job"]
    },
    pegleg: {
        type: Boolean
    },
    eyepatch: {
        type: Boolean
    },
    hookhand: {
        type: Boolean
    }

}, {timestamps: true})

const Pirate= mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;