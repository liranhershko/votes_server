const express = require('express');
const http = require('http');
const bodyParser = require('body-parser'); // parse incoming requests
const morgan = require('morgan'); // logging middleware
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB setup
mongoose.connect('mongodb://localhost:auth/auth');

// App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app); // creates the server from the express app
server.listen(port);
console.log('Server listening on:', port);