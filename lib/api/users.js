// API - users

const express = require('express');

const Router = express.Router;
const router = Router();
const User = require('../models/User');

router.get('/', async (req, res, next) => {
    try {
        const docs = await User.find();
        res.status(200).send(docs);

    } catch(err) {
        next(err);
    }
});

module.exports = router;