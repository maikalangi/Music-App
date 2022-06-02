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
    .then(d => link = sample(d))

// ===========ROUTES=============

// INDEX
router.get('/', (req, res) => {
    const trending = fetch(link + '/v1/tracks/trending?')
        .then(r => r.json())
        .then(j => j.data)
        .then(d => dataVar = d);
    res.render('index.ejs', {
        link: dataVar,
        url: link
    });
});

// NEW
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

// DELETE
router.delete('/:id', (req, res) => {
    res.redirect('/');
});

// UPDATE
router.put('/:id', (req, res) => {
    res.redirect('/:id');
});

// CREATE
router.post('/', (req, res) => {

    res.redirect('/playlist');
});

// EDIT
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs');
});

// SHOW
router.get('/:id', (req, res) => {
    const trending = fetch(link)
        .then(r => r.json())
        .then(j => j.data)
        .then(d => dataVar = d);
    res.render('show.ejs', {
        link: dataVar
    });
});

module.exports = router;