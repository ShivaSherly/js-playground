/* eslint-disable max-len */
const StaffModel = require('../models/staffModel');



const  addStaff = ('/staff', async (req, res) => {
  const staff = new StaffModel(req.body);

  try {
    await staff.save();
    res.status(201).send(staff);
  } catch (e) {
    res.status(400).send(e);
  }
});


const getAllStaff = ('/staff', StaffModel, async (req, res) => {
  try {
    const staff = await StaffModel.find({});
    res.send(staff);
    res.json(res);
  } catch (e) {
    res.status(500).send();
  }
});


const getStaff = ('/staff/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const staff = await StaffModel.findById(_id);

    if (!staff) {
      return res.status(404).send();
    }

    res.send(staff);
  } catch (e) {
    res.status(500).send();
  }
});



module.exports = {
  addStaff,
  getAllStaff,
  getStaff,
 
};