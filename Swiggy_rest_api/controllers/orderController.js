/* eslint-disable max-len */
const OrderModel = require('../models/orderModel');



const createNewOrder = ('/orders', async (req, res) => {
  const order = new OrderModel(req.body);

  try {
    await order.save();
    res.status(201).send(order);
  } catch (e) {
    res.status(400).send(e);
  }
});


const getAllOrders = ('/orders', OrderModel, async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    res.send(orders);
    res.json(res);
  } catch (e) {
    res.status(500).send();
  }
});


const getOrder = ('/orders/:orderNumber', async (req, res) => {
  const _orderNumber = req.params.id;
  console.log(req.params)

  try {

    //  const order = await OrderModel.findById(_id);

    const order = await OrderModel.findOne({ 'orderDetails.orderNumber': _orderNumber.toString() });
     
    if (!order) {
      return res.status(404).send({'message': 'sorry no results found for your requests please enter a valid number'});
    }

    res.send(order);
  } catch (e) {
    res.status(500).send();
  }
});



module.exports = {
  createNewOrder,
  getAllOrders,
  getOrder,
 
};