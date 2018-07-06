const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = {
    firstName: {
        type: String,
        required: false,
    }, 
    lastName: {
        type: String,
        required: true,
    },
    birthDate: {
        type: Date,
    },
    deathDate: {
        type: Date,
    },
    description: {
        type: String,
    },
    artworks: [{type: Schema.Types.ObjectId, ref: 'Artwork'}],
}

module.exports = mongoose.model('Artist', artistSchema);