// DEPENDENCIES
const { Router } = require('express');
const express = require('express');
const res = require('express/lib/response');
require('dotenv').config();
const fetch = require('node-fetch');
const api = process.env.API;
const Playlist = require('../models/playlist');

// INITIALIZE
const router = express.Router();
let dataVar = [];
let link = "";
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
const promise = fetch(api)
    .then(r => r.json())
    .then(j => j.data)
    .then(d => link = sample(d));
const trending = fetch(link + '/v1/tracks/trending?')
    .then(r => r.json())
    .then(j => j.data)
    .then(d => dataVar = d);