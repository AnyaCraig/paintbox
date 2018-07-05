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

module.exports = router;