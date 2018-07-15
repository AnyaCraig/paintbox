// API - Artists

const express = require('express');

const Router = express.Router;
const router = Router();

const Artist = require('../models/Artist');

router.get('/', async (req, res, next) => {
    try {
        const docs = await Artist.find().populate('artworks');
        res.status(200).send(docs);
    } catch(err) {
        next(err);
    }
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