// ARTIST SEEDS

const Artist = require('../models/Artist');
const artworks = require('./artworks');

const artists = [];


const tomThomson = new Artist({
    firstName: 'Tom',
    lastName: 'Thomson',
    birthDate: new Date('1877'),
    deathDate: new Date('1917'),
    description: 'Tom Thomson was a prolific artist who died a mysterious death on Canoe Lake.',
    artworks: artworks[0],
});

artists.push(tomThomson);

const lawrenHarris = new Artist({
    firstName: 'Lawren',
    lastName: 'Harris',
    birthDate: new Date('1885'),
    deathDate: new Date('1970'),
    description: 'Lawren Harris was a founding member of the Group of Seven and is a personal favourite of mine!',
    artworks: artworks[1],
});

artists.push(lawrenHarris);

const frederickVarley = new Artist({
    firstName: 'Frederick',
    lastName: 'Varley',
    birthDate: new Date('1881'),
    deathDate: new Date('1969'),
    description: 'Frederick Varley is best known for his contributions as a member of the Group of Seven, but he was also a talented and prolific war artist.',
    artworks: artworks[2],
});

artists.push(frederickVarley);

module.exports = artists;