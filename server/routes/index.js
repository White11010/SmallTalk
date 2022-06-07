const express = require('express');


const router = express.Router();

router.use('/auth', require('./auth.router.js'));

module.exports = router;