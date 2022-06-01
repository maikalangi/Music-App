// DEPENDENCIES
const { Router } = require('express');
const express = require('express');
const res = require('express/lib/response');
require('dotenv').config();
const fetch = require('node-fetch');
const url = process.env.DATABASE_URL;

// INITIALIZE
const router = express.Router();
let link = "";
let dataVar = [];
// const name = 'audius-promo-app'
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
// const headers = {
//         'Accept':'application/json'
//     };
const promise = fetch(url)
    .then(r => r.json())
    .then(j => j.data)
    .then(d => link = sample(d))

// const dataPromise = fetch(link)
//     .then(r => r.json())
//     .then(j => j.data)
//     .then(d => dataVar = d)
      
// fetch('https://audius-discovery-4.cultur3stake.com/v1/tracks/trending?app_name=EXAMPLEAPP',
//     {
//     }).then(function(res) {
//         return res.json();
//     }).then(function(body) {
//         return body;
//     });

// ===========ROUTES=============

// INDEX
router.get('/', (req, res) => {
    const trending = fetch(link + '/v1/tracks/trending?')
        .then(r => r.json())
        .then(j => j.data)
        .then(d => dataVar = d);
    res.render('index.ejs', {
        link: dataVar
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
    res.redirect('/');
});

// EDIT
router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs');
});

// SHOW
router.get('/:id', (req, res) => {
    res.render('show.ejs', {

    });
});

module.exports = router;