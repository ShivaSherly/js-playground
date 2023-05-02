const express = require('express');
const router = new express.Router();
const userController = require('../controllers/userController');

router.route('/registerUser')
    .post(userController.registerUser);
    
router.route('/userLogin')
    .post(userController.userLogin);


module.exports = router;
