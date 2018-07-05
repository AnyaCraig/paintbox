// ARTWORK MODEL

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist',
    },
    year: {
        type: Date,
        required: false,
    },
    // image: {},
    description: {
        type: String,
        required: false,
    },
    medium: {
        type: String,
        required: false,
    },


});

module.exports  = mongoose.model('Artwork', artworkSchema);