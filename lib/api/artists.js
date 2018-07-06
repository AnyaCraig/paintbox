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

module.exports = router;