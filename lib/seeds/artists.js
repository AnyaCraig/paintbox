// ARTIST SEEDS

const Artist = require('../models/Artist');
const Artwork = require('../models/Artwork');

const artists = [

    new Artist({
        firstName: 'Tom',
        lastName: 'Thomson',
        birthDate: new Date('August 5 1877'),
        deathDate: new Date('July 8 1917'),
        description: 'Tom Thomson was a prolific artist who died a mysterious death on Canoe Lake.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/TomThomson23.jpg/220px-TomThomson23.jpg',
        artworks: [
            new Artwork({
                name: 'Northern River',
                year: new Date('1915'),
                image: 'http://www.artchive.com/artchive/g/groupseven/thomson_northern.jpg',
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'The Pointers',
                year: new Date('1915'),
                image: 'http://www.arthistoryarchive.com/arthistory/canadian/images/TomThomson-The-Pointers-DateUnknown.jpg',
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Sunset, Canoe Lake',
                year: new Date('1915'),
                image: 'http://royalcanvas.ca/wp-content/uploads/2017/10/Sunset-Canoe-Lake-II-by-Tom-Thomson.jpg',
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Tamaracks',
                year: new Date('1915'),
                image: 'http://www.arthistoryarchive.com/arthistory/canadian/images/TomThomson-Tamaracks-1916.jpg',
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Evening Cloud',
                year: new Date('1915'),
                image: 'https://cdn8.bigcommerce.com/s-vak6ug5w2j/images/stencil/500x659/products/22006/22403/Tom_Thomson_-_Evening_Cloud_20x24_fdlg7h__26738.1486486620.jpg?c=2&imbypass=on',
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Northern Lights',
                year: new Date('1915'),
                image: 'http://i1.wp.com/painterskeys.com/wp-content/uploads/2014/12/123014__tom-thomson3.jpg',
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Autumn Foliage',
                year: new Date('1915'),
                image: 'https://royalcanvas.ca/wp-content/uploads/2016/04/Autumn-Foliage-by-Tom-Thomson.jpg',
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Otter River',
                year: new Date('1915'),
                image: 'http://www.artchive.com/artchive/g/groupseven/thomson_northern.jpg',
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Barricade River',
                year: new Date('1915'),
                image: 'http://www.artchive.com/artchive/g/groupseven/thomson_northern.jpg',
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Onion River',
                year: new Date('1915'),
                image: 'http://www.artchive.com/artchive/g/groupseven/thomson_northern.jpg',
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Scallop River',
                year: new Date('1915'),
                image: 'http://www.artchive.com/artchive/g/groupseven/thomson_northern.jpg',
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park',
                medium: 'Oil on Canvas',
            })
        ],
    }),

    new Artist({
        firstName: 'Lawren',
        lastName: 'Harris',
        birthDate: new Date('October 23 1885'),
        deathDate: new Date('January 29 1970'),
        description: 'Lawren Harris was a founding member of the Group of Seven and is a personal favourite of mine!',
        image: 'https://wheretheuniversesings.com/img/harris.jpg',
        artworks: [
            new Artwork({
                name: 'Beaver Swamp, Algoma',
                year: new Date('1920'),
                image: 'http://kerrisdalegallery.com/boni/wp-content/uploads/2012/10/hl006ph-lawren-harris_beaver-swamp-algoma.jpg',
                description: 'A painting of a beaver swamp',
                medium: 'Oil on Canvas',
            })
        ],
    }),

    new Artist({
        firstName: 'Frederick',
        lastName: 'Varley',
        birthDate: new Date('January 2 1881'),
        deathDate: new Date('September 8 1969'),
        description: 'Frederick Varley is best known for his contributions as a member of the Group of Seven, but he was also a talented and prolific war artist.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Frederick_Horsman_Varley_by_John_Vanderpant.jpg/220px-Frederick_Horsman_Varley_by_John_Vanderpant.jpg',
        artworks: [
            new Artwork({
                name: 'Winter, Charlevoix County',
                year: new Date('1933'),
                image: 'https://uploads2.wikiart.org/images/a-y-jackson/winter-morning-charlevoix-county-1933.jpg!Large.jpg',
                description: 'A painting of a winter road in the late afternoon light',
                medium: 'Oil on Canvas',
            })
        ],
    })
];


module.exports = artists;