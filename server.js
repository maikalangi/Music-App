// DEPENDENCIES
const express = require('express');
const app = express();
const res = require('express/lib/response');
const searchController = require('./controllers/search');
require('dotenv').config();
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');
const fetch = require('node-fetch');
const url = process.env.API;
const morgan = require('morgan');

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.urlencoded ({ extended: true }));
app.use(methodOverride('_method'));

// CONTROLLERS
app.use('/search', searchController);

// LISTENER
const PORT = process.env.PORT | 3000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}`));