const mongoose = require("mongoose");

const StaffModel = mongoose.model("Staff", { 
   
      name: {
        type: String,
        required: true,
        trim: true,
      },
      dob: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      designation: {
        type: String,
        required: true,
        trim: true,
      },
      drivingLicence: {
        type: String,
        required: true,
        trim: true,
      },
      experience: {
        type: String,
        required: true,
        trim: true,
      },
      staffId: {
        type: String,
        required: true,
        trim: true,
      },
  
   
  
});

module.exports = StaffModel;
