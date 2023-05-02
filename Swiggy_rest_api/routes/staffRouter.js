const express = require('express');
const router = new express.Router();
const staffController = require('../controllers/staffController');

router.route('/')
    .post(staffController.addStaff)
    .get(staffController.getAllStaff);
    

router.route('/:id')
    .get(staffController.getStaff);

module.exports = router;
