// SEEDS INDEX

const User = require('../models/User');
const Artist = require('../models/Artist');
const Artwork = require('../models/Artwork');

const users = require('./users');
const artists = require('./artists');

const mongoose = require('mongoose');
const uri = 'mongodb://heroku_4g8zkngs:p6thfnf3kaigdels0on21lifvu@ds145951.mlab.com:45951/heroku_4g8zkngs';


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
    // and all the artworks for each artist
    await Promise.all(artists.map(artist => {
            artist.artworks.map(artwork => {
                return artwork.save()
            });       
            return artist.save();
        }
    ));

    // close the database connection
    mongoose.connection.close();
}

makeSeeds(); 