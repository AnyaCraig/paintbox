// API - Artworks

const express = require('express');

const Router = express.Router;
const router = Router();

const Artwork = require('../models/Artwork');

router.get('/', async (req, res, next) => {
    try {
        const docs = await Artwork.find();
        res.status(200).send(docs);
    } catch(err) {
        next(err);
    }
});

router.get('/:artwork_id', async (req,res,next) => {
    try {
        const { artwork_id } = req.params;
        const docs = await Artwork.findById(artwork_id);
        res.status(200).send(docs);
    } catch (err) {
        next(err);
    }
});


module.exports = router;