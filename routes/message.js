const express = require('express');
const messageRouter = express.Router();
const messageController = require('../controllers/messageController')

messageRouter.get('', messageController.getAllMember);
messageRouter.get('/', messageController.getAllMember);
messageRouter.get('/:id', messageController.getMember);

module.exports = messageRouter;