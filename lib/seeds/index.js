// SEEDS INDEX

const User = require('../models/User');
const Artist = require('../models/Artist');
const Artwork = require('../models/Artwork');

const users = require('./users');
const artists = require('./artists');
const artworks = require('./artworks');

const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/paintbox';

// console.log(users);
// console.log(artists);
// console.log(artworks);

// delete all current items in our database for all our entities
const truncateDatabase = async () => {
    return Promise.all([User.deleteMany(), Artist.deleteMany(), Artwork.deleteMany()]);
}

// populate our database with our seed data for all entities
const makeSeeds = async () => {
    
    // connect to the Mongo database
    await mongoose.connect(uri);

    // delete all the old data in the database
    await truncateDatabase();

    // save our users into the database
    await Promise.all(users.map(user => user.save()));

    // save our artists into the database
    await Promise.all(artists.map(artist => artist.save()));

    // save our artworks into the database
    await Promise.all(artworks.map(artwork => artwork.save()));

    // close the database connection
    mongoose.connection.close();
}

makeSeeds(); 