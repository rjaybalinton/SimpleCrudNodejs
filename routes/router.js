const express = require('express');
const router = express.Router();
const jay = require('../controller/rjay');

router.get('/',jay.index);
router.post('/save',jay.save);

module.exports = router;