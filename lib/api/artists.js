const express = require('express');

const Router = express.Router;
const router = Router();

const Artist = require('../models/Artist');

router.get('/', async (req, res, next) => {
    try {
        const docs = await Artist.find();
        res.status(200).send(docs);
    } catch(err) {
        next(err);
    }
});

module.exports = router;