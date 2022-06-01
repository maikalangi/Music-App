// DEPENDENCIES
const { Router } = require('express');
const express = require('express');
const res = require('express/lib/response');
const api = process.env.API;
const url = process.env.DATABASE;
const Playlist = require('../models/playlist');

// INITIALIZE
const router = express.Router();

// ROUTES

// INDEX
router.get('/', (req, res) => {
    res.render('index.ejs');
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
    res.render('show.ejs');
});

module.exports = router;