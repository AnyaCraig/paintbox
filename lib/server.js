const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');
const PORT = config.PORT;
const MONGODB_URI = config.MONGODB_URI;

const app = express();
app.use(bodyParser.json());


app.use('/', express.static(path.join(__dirname, '../build')))

app.use('/users', require('./api/users')); // routing for users
app.use('/artists', require('./api/artists'));// routing for artists
app.use('/artworks', require('./api/artworks'));// routing for artworks


app.use((err, req, res, next) => {
    res.status(500).json({err: err.toString()});
}); 

// if the user requests a route that isn't listed here (becuase react-router is taking care of the routing for it),
// direct the user to the index.html page so that react-router can take over the navigation
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
});

app.listen(PORT, async () => {
    await mongoose.connect(MONGODB_URI);
    console.log(`Listening on ${PORT}`);
});

