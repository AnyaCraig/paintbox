const express = require("express");

const app = express();
const PORT = 8080;
const defaultUser = {
	name: "Jubilation T. Cornpone",
	email: "jubicornpone@hellomail.com"
};

app.get('/hello', (req, res) => {
    res.status(200)
    .json({
        message: 'hello world'
    });
}); 

app.get('/healthcheck', (req, res) => {
    res.status(200)
    .json({
    	message: 'healthcheck success'
    });
}); 
			
app.post('/login', (req, res) => {
    res.status(200)
    .json({
    	userName: defaultUser.name, 
    	userEmail: defaultUser.email 
    });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});