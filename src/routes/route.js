const express = require('express');
const router = express.Router();
const collegeController = require('../controller/collegeController')
const internController = require('../controller/internController')

// college apis
router.post('/functionup/colleges' , collegeController.createColleges);

router.post('/functionup/interns' , internController.createIntern);

module.exports = router;