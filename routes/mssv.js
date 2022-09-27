const express = require('express');
const mssvRouter = express.Router();
const mssvController = require('../controllers/mssvController')

mssvRouter.post('/:id', mssvController.addNewMember);
mssvRouter.get('/:id', mssvController.getMember);

module.exports = mssvRouter;


