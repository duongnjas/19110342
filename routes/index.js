const { getAllMembers } = require('../controllers/controllers')
const express = require('express');
const router = express.Router();

router.get('/', getAllMembers);

module.exports = router
