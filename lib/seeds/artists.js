// ARTIST SEEDS

const Artist = require('../models/Artist');
const Artwork = require('../models/Artwork');

const artists = [

    new Artist({
        firstName: 'Tom',
        lastName: 'Thomson',
        birthDate: new Date('1877'),
        deathDate: new Date('1917'),
        description: 'Tom Thomson was a prolific artist who died a mysterious death on Canoe Lake.',

        artworks: [
            new Artwork({
                name: 'Northern River',
                year: new Date('1915'),
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
                medium: 'Oil on Canvas',
            })
        ],
    }),

    new Artist({
        firstName: 'Lawren',
        lastName: 'Harris',
        birthDate: new Date('1885'),
        deathDate: new Date('1970'),
        description: 'Lawren Harris was a founding member of the Group of Seven and is a personal favourite of mine!',
        artworks: [
            new Artwork({
                name: 'Beaver Swamp, Algoma',
                year: new Date('1920'),
                description: 'A painting of a beaver swamp',
                medium: 'Oil on Canvas',
            })
        ],
    }),

    new Artist({
        firstName: 'Frederick',
        lastName: 'Varley',
        birthDate: new Date('1881'),
        deathDate: new Date('1969'),
        description: 'Frederick Varley is best known for his contributions as a member of the Group of Seven, but he was also a talented and prolific war artist.',
        artworks: [
            new Artwork({
                name: 'Winter, Charlevoix County',
                year: new Date('1933'),
                description: 'A painting of a winter road in the late afternoon light',
                medium: 'Oil on Canvas',
            })
        ],
    })
];


module.exports = artists;