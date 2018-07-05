// USER SEEDS

const User = require('../models/User');

const users = [];

const anna = new User({
    firstName: "Anna",
    lastName: "Haldane"
});

users.push(anna);

const emmett = new User({
    firstName: "Emmett",
    lastName: "Craig",
});

users.push(emmett);

const alice = new User({
    firstName: 'Alice',
    lastName: 'Mayweather',
});

users.push(alice);

module.exports = users;
