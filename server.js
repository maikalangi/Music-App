// DEPENDENCIES
const express = require('express');
const app = express();
const res = require('express/lib/response');
const morgan = require('morgan');
require('dotenv').config();
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');
const fetch = require('node-fetch');
const url = process.env.DATABASE_URL;

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
const promise = fetch(url);
promise
    .then(r => r.json())
    .then(j => j.data)
    .then(d => console.log(sample(d)))

const PORT = process.env.PORT | 3000;
app.listen(PORT, ()=>console.log(`listening on port ${PORT}`));