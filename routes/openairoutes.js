const express = require('express');
const router = express.Router();
const {generateimage} = require('../controllers/openaicontroller');

router.post('/generateimage', generateimage);

module.exports = router;
