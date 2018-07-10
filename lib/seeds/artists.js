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
                description: 'A painting of a swampy stretch of river, believed to be the Oxtongue River in Algonquin Park.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'The Pointers',
                year: new Date('1915'),
                image: 'http://www.arthistoryarchive.com/arthistory/canadian/images/TomThomson-The-Pointers-DateUnknown.jpg',
                description: 'A painting of some hills in a distant haze.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Sunset, Canoe Lake',
                year: new Date('1915'),
                image: 'http://royalcanvas.ca/wp-content/uploads/2017/10/Sunset-Canoe-Lake-II-by-Tom-Thomson.jpg',
                description: 'A painting of the sun setting over Canoe Lake, the scene of Thomson\'s eventual death.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Tamaracks',
                year: new Date('1915'),
                image: 'http://www.arthistoryarchive.com/arthistory/canadian/images/TomThomson-Tamaracks-1916.jpg',
                description: 'A painting of a stand of brightly-coloured tamarack trees.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Evening Cloud',
                year: new Date('1915'),
                image: 'https://cdn8.bigcommerce.com/s-vak6ug5w2j/images/stencil/500x659/products/22006/22403/Tom_Thomson_-_Evening_Cloud_20x24_fdlg7h__26738.1486486620.jpg?c=2&imbypass=on',
                description: 'A painting of a purplish cloud hanging low over a lake with a forested shore in the distance.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Northern Lights',
                year: new Date('1915'),
                image: 'http://i1.wp.com/painterskeys.com/wp-content/uploads/2014/12/123014__tom-thomson3.jpg',
                description: 'A painting of bright Northern Lights dancing over a snowy hill.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Autumn Foliage',
                year: new Date('1915'),
                image: 'https://royalcanvas.ca/wp-content/uploads/2016/04/Autumn-Foliage-by-Tom-Thomson.jpg',
                description: 'A painting of trees clothed in autumn hues standing before a sapphire-coloured lake.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Pine Trees at Sunset',
                year: new Date('1915'),
                image: 'https://royalcanvas.ca/wp-content/uploads/2016/06/Pine-Trees-at-Sunset-1915.jpg',
                description: 'A painting of pine trees silhouetted against a glowing evening sky.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Spring Ice',
                year: new Date('1916'),
                image: 'https://mydailyartdisplay.files.wordpress.com/2011/11/spring-ice-by-tom-thomson.jpg',
                description: 'A painting of a blue lake on a sunny day with chunks of ice breaking apart during the spring thaw.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Sunset',
                year: new Date('1915'),
                image: 'https://www.aci-iac.ca/content/online-exhibitions/4/tom-thomson-sunset-1915.jpg',
                description: 'A sweeping sunset of red and yellow hues is reflected in a placid lake, behind which stands a dark shore.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Black Spruce in Autumn',
                year: new Date('1915'),
                image: 'https://cdn.shopify.com/s/files/1/0871/2144/products/21610_1024x1024.jpg?v=1441055245',
                description: 'A painting of fluffy clouds above a narrow strait between two peninsulas covered in black spruce trees.',
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
            }),
            new Artwork({
                name: 'South Shore Bylot Island',
                year: new Date('1931'),
                image: 'https://c2.staticflickr.com/6/5492/10537615754_75649e9b8e_b.jpg',
                description: 'A painting of a snow-covered arctic mountain.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Red House, Winter',
                year: new Date('1915'),
                image: 'https://koymangalleries.com/shop-art/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/e/red_house_winter.jpg',
                description: 'A tidy red brick house stands covered in a blanket of winter snow.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Trees in the North',
                year: null,
                image: 'http://www.artcountrycanada.com/images/harris-lawren-Trees-in-the-North.jpg',
                description: 'A painting of some green trees on a hill.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Mountain and Glacier',
                year: new Date('1930'),
                image: 'http://www.artnet.com/WebServices/images/ll00145lldVRFJFguSECfDrCWvaHBOcUYvE/lawren-harris-mountain-and-glacier.jpg',
                description: 'A painting of a glacier and a mountain.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Decorative Landscape',
                year: new Date('1917'),
                image: 'http://royalcanvas.ca/wp-content/uploads/2016/11/Decorative-Landscape-1917-by-Lawren-Harris.jpg',
                description: 'A stand of evergreens is silhouetted in violet tones against a bright yellow sky.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Elevator Court, Halifax',
                year: new Date('1921'),
                image: 'https://78.media.tumblr.com/79c057ca40d3050fcc20b91c107f18ab/tumblr_mjr7xvRrJq1s5qfmbo1_540.jpg',
                description: 'Some industiral-looking wooden slat buildings stand in front of a tall chimney at dusk.',
                medium: 'Oil on Canvas',
            }),
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
            }),
            new Artwork({
                name: 'Stormy Weather Georgian Bay',
                year: new Date('1920'),
                image: 'http://www.arthistoryarchive.com/arthistory/canadian/images/Frederick-H-Varley-Stormy-Weather-Georgian-Bay-1920.jpg',
                description: 'A pine tree bends in the wind on a rocky shore as clouds race by and waves pound in the water below.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Lynn Valley',
                year: new Date('1930'),
                image: 'http://evelazarus.com/canada/wp-content/uploads/2014/12/Varley-Mountain-Road-Lynn-Valley-1932-640x511.jpg',
                description: 'A road road winds between mountains on an overcast day.',
                medium: 'Oil on Canvas',
            })
        ],
    }),
    new Artist({
        firstName: 'Frank',
        lastName: 'Johnston',
        birthDate: new Date('June 19 1888'),
        deathDate: new Date('July 19 1949'),
        description: 'Frank Johnston stands out amongst the other members of the Group of Seven for his more realistic style.',
        image: 'http://www.heffel.com/images/Artists/118.jpg',
        artworks: [
            new Artwork({
                name: 'Serenity Lake of the Woods',
                year: new Date('1922'),
                image: 'http://www.arthistoryarchive.com/arthistory/canadian/images/Frank-H-Johnston-Serenity-Lake-of-the-Woods-1922.jpg',
                description: 'A painting of a lake in the late afternoon light.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'The Fire Ranger',
                year: new Date('1920'),
                image: 'http://www.artcountrycanada.com/images/johnston-franz-The-Fire-Ranger.jpg',
                description: 'A small prop plane flies over a forest.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'The Dark Woods Interior',
                year: new Date('1921'),
                image: 'http://www.arthistoryarchive.com/arthistory/canadian/images/Frank-H-Johnston-The-Dark-Woods-Interior-c1921.jpg',
                description: 'A forest of mixed deciduous and evergreen trees stands before a dark hill.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Fire Swept Algoma',
                year: new Date('1920'),
                image: 'http://www.arthistoryarchive.com/arthistory/canadian/images/FrankJohnston-Camp-Borden-1919.jpg',
                description: 'Two planes careen over a sunny landscape of fields.',
                medium: 'Oil on Canvas',
            }),
        ],
    }),
    new Artist({
        firstName: 'A.J.',
        lastName: 'Casson',
        birthDate: new Date('May 17 1898'),
        deathDate: new Date('February 20 1992'),
        description: 'Casson is best known for his depictions of landscapes, forests and farms of southern Ontario, and for being the youngest member of the Group of Seven.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/AJCasson.JPG/220px-AJCasson.JPG',
        artworks: [
            new Artwork({
                name: 'Little Island',
                year: new Date('1965'),
                image: 'https://uploads2.wikiart.org/images/a-y-jackson/winter-morning-charlevoix-county-1933.jpg!Large.jpg',
                description: 'A small island stands in a placid lake.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Norval',
                year: new Date('1929'),
                image: 'https://cdn.shopify.com/s/files/1/0871/2144/products/14372_1024x1024.jpg?v=1441054973',
                description: 'A painting of the sleepy town of Norval.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Housetops in the Ward',
                year: new Date('1927'),
                image: 'https://cdn.shopify.com/s/files/1/0871/2144/products/1994_1.jpg?v=1447705727',
                description: 'The sun shines on snowy housetops.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Port Carling',
                year: new Date('1947'),
                image: 'https://cdn.shopify.com/s/files/1/0871/2144/products/35745_1024x1024.jpg?v=1441054851',
                description: 'A small sailboat heads out into a lake through a small channel.',
                medium: 'Watercolour over Graphite on Paper',
            }),
            new Artwork({
                name: 'Spring, Lasky',
                year: new Date('1932'),
                image: 'https://cdn.shopify.com/s/files/1/0871/2144/products/14386.jpg?v=1441054873',
                description: 'A quiet country road tumbles past a wooden shack.',
                medium: 'Watercolour on Paper',
            }),
        ],
    }),
    new Artist({
        firstName: 'Franklin',
        lastName: 'Carmichael',
        birthDate: new Date('May 4 1890'),
        deathDate: new Date('October 24 1945'),
        description: 'Franklin Carmichael was a Canadian artist and member of the Group of Seven. Though he was primarily famous for his use of watercolours, he also used oil paints, charcoal and other mediums to capture the Ontario landscapes of which he was fond.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Franklin_Carmichael.jpg/220px-Franklin_Carmichael.jpg',
        artworks: [
            new Artwork({
                name: 'Lake Wabagishik',
                year: new Date('1928'),
                image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Franklin_Carmichael_-_Lake_Wabagishik.jpg',
                description: 'Green hills behind a lake on a cloudy day.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Bay of Islands from Mt.Burke',
                year: new Date('1931'),
                image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Franklin_Carmichael_-_Bay_of_Islands_from_Mt._Burke.jpg',
                description: 'A rocky mountain overlooks a lake studded with islands.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'The Nickel Belt',
                year: new Date('1928'),
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Franklin_H_Carmichael.jpg/1280px-Franklin_H_Carmichael.jpg',
                description: 'Smoke rises from a quarry.',
                medium: 'Oil on Canvas',
            })
        ],
    }),
    new Artist({
        firstName: 'Arthur',
        lastName: 'Lismer',
        birthDate: new Date('June 27 1885'),
        deathDate: new Date('March 23 1969'),
        description: 'Arthur Lismer was an English-Canadian painter and member of the Group of Seven. He is known for his paintings of ships in dazzle camouflage..',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Arthur_Lismer.jpg/220px-Arthur_Lismer.jpg',
        artworks: [
            new Artwork({
                name: 'RMS Olympic in Dazzle at Pier 2 in Halifax, Nova Scotia',
                year: null,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Arthur_Lismer_-_Olympic_with_Returned_Soldiers.jpg/1280px-Arthur_Lismer_-_Olympic_with_Returned_Soldiers.jpg',
                description: 'A ship in dazzle camouflage in port',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Minesweepers',
                year: new Date('1919'),
                image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Arthur_Lismer_-_Minesweepers%2C_Halifax_CWM_19710261-0342.jpg',
                description: 'A line of ships sails across a rough sea.',
                medium: 'Oil on Canvas',
            }),
            new Artwork({
                name: 'Quebec Village',
                year: new Date('1925'),
                image: 'http://www.artcountrycanada.com/images/lismer-arthur-Quebec-Village.jpg',
                description: 'A picturesque scene of a small village with a church steeple.',
                medium: 'Oil on Canvas',
            })
        ],
    })
];


module.exports = artists;