const express = require('express');
const router = express.Router();
const userController=require('../Controller/usersController');

// Route to display users
router.get('/', userController.showUsers);

module.exports = router;
