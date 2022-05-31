// DEPENDENCIES
const express = require('express');

// INITIALIZE
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs');
});

module.exports = router;