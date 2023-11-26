// server.js
const express = require('express');

cors = require('cors'),
bodyParser = require('body-parser'),
 connectionMongo= require('./database/db');
 
 const app = express();
 const port = 4000;
 
 
 connectionMongo();


// Setting up port with express js


const allowedOrigin = 'http://localhost:3000/';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// Enable CORS for a specific origin or all
app.use(cors({
  // origin: allowedOrigin,
  origin: '*',
}));



const UserRoute = require('./routes/user.route')
app.use(UserRoute)




// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
