const mongoose = require("mongoose");

const OrderModel = mongoose.model("Order", {
  orderDetails: {
    orderNumber: {
      type: String,
      required: true,
      trim: true,
    },
    customerInfo: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      phoneNumber: {
        type: String,
        required: true,
        trim: true,
      },
      geoLocation: [],
    },
    resturantInfo: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      geolocation: [],
    },
    swiggyInfo: {
      customerCareInfo: {
        type: String,
        required: true,
        trim: true,
      },
      deliveryCharges: {
        type: String,
        required: true,
        trim: true,
      },
    },
  },
});

module.exports = OrderModel;
