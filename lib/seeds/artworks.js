/* ARTWORK SEEDS */

const Artwork = require('../models/Artwork');

console.log("ARTWORK SEEDS FILE");
const artistSeeds = require('./artists');
// const artists ="hallow";

console.log("artworks seeds file artists", artistSeeds);
const artworks = [];

const northernRiver = new Artwork({
    name: 'Northern River',
    artist: artistSeeds[0],
    year: new Date('1915'),
    description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
    medium: 'Oil on Canvas',
});

artworks.push(northernRiver);

const beaverSwampAlgoma = new Artwork({
    name: 'Beaver Swamp, Algoma',
    artist: artistSeeds[1],
    year: new Date('1920'),
    description: 'A painting of a beaver swamp',
    medium: 'Oil on Canvas',
});

artworks.push(beaverSwampAlgoma);

const winterCharlevoixCounty = new Artwork({
    name: 'Winter, Charlevoix County',
    artist: artistSeeds[2],
    year: new Date('1933'),
    description: 'A painting of a winter road in the late afternoon light',
    medium: 'Oil on Canvas',
});

artworks.push(winterCharlevoixCounty);

// console.log("artworks seeds", artworks);

module.exports = artworks;