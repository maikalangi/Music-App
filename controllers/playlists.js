// DEPENDENCIES
const { Router } = require('express');
const express = require('express');
const res = require('express/lib/response');
const fetch = require('node-fetch');
const api = process.env.API;
const url = process.env.DATABASE;
const Playlist = require('../models/playlist');

// INITIALIZE
const router = express.Router();
let link = "";
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
const promise = fetch(api)
    .then(r => r.json())
    .then(j => j.data)
    .then(d => link = sample(d))

// ROUTES

// SEED
const seed = require('../models/playlistSeed');
router.get('/seed', (req, res) => {
    Playlist.deleteMany({}, (error, allBooks) => {});
    Playlist.create(seed, (error, data) => {
        res.redirect('/playlist');
    });
});

// INDEX
router.get('/', (req, res) => {
    Playlist.find({}, (error, allSongs) => {
        res.render('show.ejs', {
            link: allSongs,
            url: link,
        });
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
    Playlist.create(req.body, (err, addSong) => {
        res.redirect('/playlist');
    });
});

// EDIT
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs');
});

// SHOW
router.get('/:id', (req, res) => {
    res.render('show.ejs');
});

module.exports = router;