const express = require("express");
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/paintbox';
const app = express();
const PORT = 8080;

app.use('/users', require('./api/users'));
app.use('/artists', require('./api/artists'));
app.use('/artworks', require('./api/artworks'));


app.use((err, req, res, next) => {
    res.status(500).json({err: err.toString()});
}); 


app.listen(PORT, async () => {
    await mongoose.connect(uri);
    console.log(`Listening on ${PORT}`);
});

// app.get('/hello', (req, res) => {
//     res.status(200)
//     .json({
//         message: 'hello world'
//     });
// }); 

// app.get('/healthcheck', (req, res) => {
//     res.status(200)
//     .json({
//     	message: 'healthcheck success'
//     });
// }); 
			
// app.post('/login', (req, res) => {
//     res.status(200)
//     .json({
//     	userName: defaultUser.name, 
//     	userEmail: defaultUser.email 
//     });
// });