const express = require('express');
const router = new express.Router();
const orderController = require('../controllers/orderController');

router.route('/')
    .post(orderController.createNewOrder)
    .get(orderController.getAllOrders);
    

router.route('/:id')
    .get(orderController.getOrder);

module.exports = router;
