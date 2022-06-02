// DEPENDENCIES
const express = require('express');
const app = express();
const res = require('express/lib/response');
const search = require('./controllers/search');
const playlist = require('./controllers/playlists');
require('dotenv').config();
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');
const fetch = require('node-fetch');
const morgan = require('morgan');

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.urlencoded ({ extended: true }));
app.use(methodOverride('_method'));

// CONTROLLERS
app.use('/search', search);
app.use('/playlist', playlist);

// LISTENER
const PORT = process.env.PORT | 3000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}`));