const express = require('express');
const router = new express.Router();
const loginController = require('../controllers/loginController');

router.route('/')
    .post(logincontroller.createNewLogin)
    .get(loginController.getAllLogin);
    

router.route('/:id')
    .get(loginController.getLogin);

module.exports = router;
