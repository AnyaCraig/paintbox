// API - Artists

const express = require('express');

const Router = express.Router;
const router = Router();

const Artist = require('../models/Artist');
const Artwork = require('../models/Artwork');

router.get('/', async (req, res, next) => {
    const searchTerm = req.query.q;
    // if (!searchTerm) {

        try {
            const docs = await Artist.find({ 	
                $or: [
                    { firstName: { $regex: searchTerm, $options: 'xi' }}, 
                    { lastName: {$regex: searchTerm, $options: 'xi'}},
                ]
            }).populate('artworks');
            res.status(200).send(docs);
    
        } catch(err) {
            console.log(err);
            next(err);
        }

    // } else {

    //     console.log("there is a search term");

    //     try {

    //         console.log('hello are we getting here?')
    //         Artist.aggregate([
    //                 {$project: { "fullName" : { $concat : [ "$firstName", " ", "$lastName" ] } }},
    //                 {$match: {"fullName": { $regex: searchTerm, $options: 'xi' }}}
    //             ]).exec((err, result) => {
    //                 console.log(err, 'are you an error friendo')
    //                 console.log("restult", result);
    //                 // Artist.populate(result, {path: "artworks"}, () => res.status(200).send(result));
    //                 Artist.populate(result, {path: 'artworks'}, function(err, populatedArtists) {
    //                     // Your populated translactions are inside populatedTransactions
    //                     res.status(200).send(populatedArtists)
    //                 });
                    
    //             });
    //     } catch(err) {
    //         console.log(err);
    //         next(err);
    //     }
    // }
});

router.get('/:artist_id', async (req, res, next) => {

    try {
        const { artist_id } = req.params;
        const docs = await Artist.findById(artist_id).populate('artworks');
        res.status(200).send(docs);
    } catch (err) {
        next(err);
    }
});

router.post('/:artist_id', async (req, res, next) => {

    console.log("POSTING AN ARTWORK TO AN ARTIST");
    // grab the post id from the query params
    const { artist_id } = req.params;

    console.log("artist id", artist_id);
    // grab the comment from the request body

    const artwork = new Artwork({
        name: req.body.name, 
        year: req.body.year,
        image: req.body.image,
        description: req.body.description,
        medium: req.body.medium
    });

    console.log("artwork", artwork);

    try {
        // find the artist by id
        const doc = await Artist.findById(artist_id);

        console.log("found artist =", doc);
        // push the new comment into the existing posts array
        doc.artworks.push(artwork)
        // re-save the document
        await doc.save();

        console.log("SAVED ALL GOOD");

        // send back the updated document
        res.status(200).send(doc)
    } catch (e) {
        // otherwise pass the error to the error handler
        next(e)
    }
});

router.post('/', async (req, res) => {
    // const { description } = req.body
    console.log("req", req.body);
    // const { user } = req.decoded
    const artist = new Artist({
        firstName: req.body.firstName , 
        lastName: req.body.lastName ,
        birthDate: req.body.birthDate,
        deathDate: req.body.deathDate,
        description: req.body.description,
        image: req.body.image ,
        artworks: [],
    });

    artist
      .save()
      .then(doc => {
        res.status(200).send({ message: "success", payload: doc });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
});


module.exports = router;